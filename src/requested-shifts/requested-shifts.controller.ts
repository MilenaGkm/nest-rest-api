import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateRequestedShiftDto } from './dto/create-requested-shift.dto';
import { RequestedShiftsService } from './requested-shifts.service';
import { RequestedShift } from './interfaces/requested-shift.interface';

@Controller('requested-shifts')
export class RequestedShiftsController {
    constructor(private readonly requestedShiftsService: RequestedShiftsService) {}

    @Get()
    findAll(): Promise<RequestedShift[]> {
        return this.requestedShiftsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<RequestedShift> {
        return this.requestedShiftsService.findOne(id);
    }

    @Post()
    create(@Body() createRequestedShiftDto: CreateRequestedShiftDto): Promise<RequestedShift> {
        return this.requestedShiftsService.create(createRequestedShiftDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<RequestedShift> {
        return this.requestedShiftsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateRequestedShiftDto: CreateRequestedShiftDto, @Param('id') id): Promise<RequestedShift> {
        return this.requestedShiftsService.update(id, updateRequestedShiftDto);
    }
}
