import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduledShiftsController } from './scheduled-shifts.controller';
import { ScheduledShiftsService } from './scheduled-shifts.service';
import { ScheduledShiftSchema } from './schemas/scheduled-shift.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ScheduledShift', schema: ScheduledShiftSchema}])],
  controllers: [ScheduledShiftsController],
  providers: [ScheduledShiftsService],
})
export class ScheduledShiftsModule {}