import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { TasksModule } from './tasks/tasks.module'
import { TimeBlockModule } from './time-block/time-block.module'
import { UserModule } from './user/user.module'
import { PomodoroModule } from './pomodoro/pomodoro.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		TasksModule,
		TimeBlockModule,
		PomodoroModule
	]
})
export class AppModule {}
