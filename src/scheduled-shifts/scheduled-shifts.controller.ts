import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateScheduledShiftDto } from './dto/create-scheduled-shift.dto';
import { ScheduledShiftsService } from './scheduled-shifts.service';
import { ScheduledShift } from './interfaces/scheduled-shift.interface';

@Controller('scheduled-shifts')
export class ScheduledShiftsController {
    constructor(private readonly scheduledShiftsService: ScheduledShiftsService) {}
    
    @Get()
    findAll(): Promise<ScheduledShift[]> {
        return this.scheduledShiftsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<ScheduledShift> {
        return this.scheduledShiftsService.findOne(id);
    }

    @Post()
    create(@Body() createScheduledShiftDto: CreateScheduledShiftDto): Promise<ScheduledShift> {
        return this.scheduledShiftsService.create(createScheduledShiftDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<ScheduledShift> {
        return this.scheduledShiftsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateScheduledShiftDto: CreateScheduledShiftDto, @Param('id') id): Promise<ScheduledShift> {
        return this.scheduledShiftsService.update(id, updateScheduledShiftDto);
    }
}
