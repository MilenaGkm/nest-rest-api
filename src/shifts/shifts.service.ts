import { Injectable } from '@nestjs/common';
import { Shift } from './interfaces/shift.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ShiftsService {
    constructor(@InjectModel('Shift') private readonly shiftModel: Model<Shift>) { }

    async findAll(): Promise<Shift[]> {
        return await this.shiftModel.find();
    }

    async findOne(id: string): Promise<Shift> {
        return await this.shiftModel.findOne({ _id: id });
    }

    async create(shift: Shift): Promise<Shift> {
        const newShift = new this.shiftModel(shift);
        return await newShift.save() 
    }

    async delete(id: string):Promise<Shift> {
        return await this.shiftModel.findByIdAndRemove(id);
    }

    async update(id: string, shift: Shift): Promise<Shift> {
        return await this.shiftModel.findByIdAndUpdate(id, shift, { new: true });
    }
}
