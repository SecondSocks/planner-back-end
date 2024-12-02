import { Injectable } from '@nestjs/common'
import { Task } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { TaskDto } from './dto/task.dto'

@Injectable()
export class TasksService {
	constructor(private readonly prisma: PrismaService) {}

	completedTasks(userId: string): Promise<number> {
		return this.prisma.task.count({
			where: {
				userId,
				isCompleted: true
			}
		})
	}

	timeTasks(userId: string, time: Date): Promise<number> {
		return this.prisma.task.count({
			where: {
				userId,
				createdAt: {
					gte: time.toISOString() // gte - greater than or equal (>=)
				}
			}
		})
	}

	async getAll(userId: string): Promise<Task[]> {
		return this.prisma.task.findMany({
			where: { userId }
		})
	}

	async create(dto: TaskDto, userId: string): Promise<Task> {
		return this.prisma.task.create({
			data: {
				...dto,
				user: {
					connect: {
						id: userId
					}
				}
			}
		})
	}

	async update(dto: Partial<TaskDto>, taskId: string, userId: string) {
		return this.prisma.task.update({
			where: {
				userId,
				id: taskId
			},
			data: dto
		})
	}

	async delete(taskId: string, userId: string) {
		return this.prisma.task.delete({
			where: {
				userId,
				id: taskId
			}
		})
	}
}
