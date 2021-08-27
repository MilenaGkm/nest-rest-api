import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateSubmittedShiftDto } from './dto/create-submitted-shift.dto';
import { SubmittedShiftsService } from './submitted-shifts.service';
import { SubmittedShift } from './interfaces/submitted-shift.interface';

@Controller('submitted-shifts')
export class SubmittedShiftsController {
    constructor(private readonly submittedShiftsService: SubmittedShiftsService) {}

    @Get()
    findAll(): Promise<SubmittedShift[]> {
        return this.submittedShiftsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<SubmittedShift> {
        return this.submittedShiftsService.findOne(id);
    }

    @Post()
    create(@Body() createSubmittedShiftDto: CreateSubmittedShiftDto): Promise<SubmittedShift> {
        return this.submittedShiftsService.create(createSubmittedShiftDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<SubmittedShift> {
        return this.submittedShiftsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateSubmittedShiftDto: CreateSubmittedShiftDto, @Param('id') id): Promise<SubmittedShift> {
        return this.submittedShiftsService.update(id, updateSubmittedShiftDto);
    }
}
