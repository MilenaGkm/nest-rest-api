import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmittedShiftsController } from './submitted-shifts.controller';
import { SubmittedShiftsService } from './submitted-shifts.service';
import { SubmittedShiftSchema } from './schemas/submitted-shift.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'SubmittedShift', schema: SubmittedShiftSchema}])],
  controllers: [SubmittedShiftsController],
  providers: [SubmittedShiftsService],
})
export class SubmittedShiftsModule {}