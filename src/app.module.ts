import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { RequestedShiftsModule } from './requested-shifts/requested-shifts.module';
import { SubmittedShiftsModule } from './submitted-shifts/submitted-shifts.module';
import { ScheduledShiftsModule } from './scheduled-shifts/scheduled-shifts.module';
import { MsgsModule } from './msgs/msgs.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { SubmittedShiftsController } from './submitted-shifts/submitted-shifts.controller';
// import { SubmittedShiftsService } from './submitted-shifts/submitted-shifts.service';
// import { ScheduledShiftsController } from './scheduled-shifts/scheduled-shifts.controller';
// import { ScheduledShiftsService } from './scheduled-shifts/scheduled-shifts.service';

// import { AuthController } from './auth/auth.controller';

import { AuthModule } from './auth/auth.module';
import config from './config/keys';

@Module({
  imports: [UsersModule, AdminsModule, RequestedShiftsModule, SubmittedShiftsModule, ScheduledShiftsModule, MsgsModule, MongooseModule.forRoot(config.mongoURI), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
