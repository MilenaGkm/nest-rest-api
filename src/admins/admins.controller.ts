import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminsService } from './admins.service';
import { Admin } from './interfaces/admin.interface';

@Controller('admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) {}

    @Get()
    findAll(): Promise<Admin[]> {
        return this.adminsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Admin> {
        return this.adminsService.findOne(id);
    }

    @Post()
    create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
        return this.adminsService.create(createAdminDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Admin> {
        return this.adminsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateAdminDto: CreateAdminDto, @Param('id') id): Promise<Admin> {
        return this.adminsService.update(id, updateAdminDto);
    }
}
