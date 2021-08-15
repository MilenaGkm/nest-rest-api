import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestedShiftsController } from './requested-shifts.controller';
import { RequestedShiftsService } from './requested-shifts.service';
import { RequestedShiftSchema } from './schemas/requested-shift.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'RequestedShift', schema: RequestedShiftSchema}])],
  controllers: [RequestedShiftsController],
  providers: [RequestedShiftsService],
})
export class RequestedShiftsModule {}