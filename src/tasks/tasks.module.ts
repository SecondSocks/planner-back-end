import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TasksController } from './tasks.controller'
import { TasksService } from './tasks.service'

@Module({
	controllers: [TasksController],
	providers: [TasksService, PrismaService],
	exports: [TasksService]
})
export class TasksModule {}
