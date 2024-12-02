import { Injectable, NotFoundException } from '@nestjs/common'
import { User } from '@prisma/client'
import { hash } from 'argon2'
import { startOfDay, subDays } from 'date-fns'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { TasksService } from 'src/tasks/tasks.service'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly tasksService: TasksService
	) {}

	getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				tasks: true
			}
		})
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			}
		})
	}

	async getProfile(id: string) {
		const profile = await this.getById(id)

		if (!profile) {
			throw new NotFoundException('User not found')
		}

		const totalTasks = profile.tasks.length
		const completedTasks = await this.tasksService.completedTasks(id)

		const todayStart = startOfDay(new Date())
		const weekStart = startOfDay(subDays(new Date(), 7))

		const todayTasks = await this.tasksService.timeTasks(id, todayStart)
		const weekTasks = await this.tasksService.timeTasks(id, weekStart)

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...rest } = profile

		return {
			user: rest,
			statistics: [
				{ label: 'Total tasks: ', value: totalTasks },
				{ label: 'Completed tasks: ', value: completedTasks },
				{ label: 'Today tasks: ', value: todayTasks },
				{ label: 'Week tasks: ', value: weekTasks }
			]
		}
	}

	async create(dto: AuthDto): Promise<User> {
		const user = {
			email: dto.email,
			name: '',
			password: await hash(dto.password)
		}

		return this.prisma.user.create({
			data: user
		})
	}

	async update(id: string, dto: UserDto) {
		const user = await this.getById(id)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		let data = dto

		if (dto.password) {
			data = { ...dto, password: await hash(dto.password) }
		}

		return this.prisma.user.update({
			where: { id },
			data,
			select: {
				name: true,
				email: true
			}
		})
	}
}
