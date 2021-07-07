import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { ShiftsService } from './shifts.service';
import { Shift } from './interfaces/shift.interface';

@Controller('shifts')
export class ShiftsController {
    constructor(private readonly shiftsService: ShiftsService) {}

    @Get()
    findAll(): Promise<Shift[]> {
        return this.shiftsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Shift> {
        return this.shiftsService.findOne(id);
    }

    @Post()
    create(@Body() createShiftDto: CreateShiftDto): Promise<Shift> {
        return this.shiftsService.create(createShiftDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Shift> {
        return this.shiftsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateShiftDto: CreateShiftDto, @Param('id') id): Promise<Shift> {
        return this.shiftsService.update(id, updateShiftDto);
    }
}
