import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { ShiftSchema } from './schemas/shift.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Shift', schema: ShiftSchema}])],
  controllers: [ShiftsController],
  providers: [ShiftsService],
})
export class ShiftsModule {}