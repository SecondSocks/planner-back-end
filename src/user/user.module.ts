import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TasksService } from 'src/tasks/tasks.service'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService, TasksService],
	exports: [UserService]
})
export class UserModule {}
