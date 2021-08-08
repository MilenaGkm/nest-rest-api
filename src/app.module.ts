import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { ShiftsModule } from './shifts/shifts.module';
import { MsgsModule } from './msgs/msgs.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [UsersModule, AdminsModule, ShiftsModule, MsgsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
