import { Injectable } from '@nestjs/common';
import { ScheduledShift } from './interfaces/scheduled-shift.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ScheduledShiftsService {
    constructor(@InjectModel('ScheduledShift') private readonly scheduledShiftModel: Model<ScheduledShift>) { }

    async findAll(): Promise<ScheduledShift[]> {
        return await this.scheduledShiftModel.find();
    }

    async findOne(id: string): Promise<ScheduledShift> {
        return await this.scheduledShiftModel.findOne({ _id: id });
    }

    async create(scheduledShift: ScheduledShift): Promise<ScheduledShift> {
        // const newScheduledShift = new this.scheduledShiftModel(scheduledShift);
        const newScheduledShift = {
            adminId: scheduledShift.adminId,
            dateFrom: scheduledShift.dateFrom,
            dateTo: scheduledShift.dateTo,
            updateDate: new Date().toLocaleString(),
            createDate: new Date().toLocaleString(),
            shifts: scheduledShift.shifts,
        };
        // console.log(newScheduledShift);
        const saveNewScheduledShift = new this.scheduledShiftModel(newScheduledShift);
        // console.log("---------------------");
        
        // console.log(saveNewScheduledShift);
        return await saveNewScheduledShift.save();
        // console.log(new Date().toLocaleString());
        // console.log(new Date().toLocaleTimeString());
        
        // return await newScheduledShift.save() 
    }

    async delete(id: string):Promise<ScheduledShift> {
        return await this.scheduledShiftModel.findByIdAndRemove(id);
    }

    async update(id: string, scheduledShift: ScheduledShift): Promise<ScheduledShift> {
        return await this.scheduledShiftModel.findByIdAndUpdate(id, scheduledShift, { new: true });
    }
}
