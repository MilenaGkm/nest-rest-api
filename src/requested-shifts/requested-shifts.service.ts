import { Injectable } from '@nestjs/common';
import { RequestedShift } from './interfaces/requested-shift.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class RequestedShiftsService {
    constructor(@InjectModel('RequestedShift') private readonly requestedShiftModel: Model<RequestedShift>) { }

    async findAll(): Promise<RequestedShift[]> {
        return await this.requestedShiftModel.find();
    }

    async findOne(id: string): Promise<RequestedShift> {
        return await this.requestedShiftModel.findOne({ _id: id });
    }

    async create(requestedShift: RequestedShift): Promise<RequestedShift> {
        // const newRequestedShift = new this.requestedShiftModel(requestedShift);
        const newRequestedShift = {
            adminId: requestedShift.adminId,
            dateFrom: requestedShift.dateFrom,
            dateTo: requestedShift.dateTo,
            updateDate: new Date().toLocaleString(),
            createDate: new Date().toLocaleString(),
            shifts: requestedShift.shifts,
        };
        // console.log(newRequestedShift);
        const saveNewRequestedShift = new this.requestedShiftModel(newRequestedShift);
        return await saveNewRequestedShift.save();
        // console.log(new Date().toLocaleString());
        // console.log(new Date().toLocaleTimeString());
        
        // return await newRequestedShift.save() 
    }

    async delete(id: string):Promise<RequestedShift> {
        return await this.requestedShiftModel.findByIdAndRemove(id);
    }

    async update(id: string, requestedShift: RequestedShift): Promise<RequestedShift> {
        return await this.requestedShiftModel.findByIdAndUpdate(id, requestedShift, { new: true });
    }
}
