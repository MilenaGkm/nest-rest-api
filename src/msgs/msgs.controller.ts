import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateMsgDto, CreateManyMsgDto } from './dto/create-msg.dto';
import { MsgsService } from './msgs.service';
import { Msg } from './interfaces/msg.interface';

@Controller('msgs')
export class MsgsController {
    constructor(private readonly msgsService: MsgsService) {}

    @Get()
    findAll(): Promise<Msg[]> {
        return this.msgsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Msg> {
        return this.msgsService.findOne(id);
    }

    @Post()
    createMany(@Body() createManyMsgDto: CreateManyMsgDto): Promise<void> {
        return this.msgsService.createMany(createManyMsgDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Msg> {
        return this.msgsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateMsgDto: CreateMsgDto, @Param('id') id): Promise<Msg> {
        return this.msgsService.update(id, updateMsgDto);
    }
}
