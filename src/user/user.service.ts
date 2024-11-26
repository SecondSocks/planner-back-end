import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	getById(id: string): Promise<User> {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				tasks: true
			}
		})
	}

	getByEmail(email: string): Promise<User> {
		return this.prisma.user.findUnique({
			where: {
				email
			}
		})
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
}
