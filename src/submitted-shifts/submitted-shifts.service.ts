import { Injectable } from '@nestjs/common';
import { SubmittedShift } from './interfaces/submitted-shift.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubmittedShiftsService {
    constructor(@InjectModel('SubmittedShift') private readonly submittedShiftModel: Model<SubmittedShift>) { }

    async findAll(): Promise<SubmittedShift[]> {
        return await this.submittedShiftModel.find();
    }

    async findOne(id: string): Promise<SubmittedShift> {
        return await this.submittedShiftModel.findOne({ _id: id });
    }

    async create(submittedShift: SubmittedShift): Promise<SubmittedShift> {
        // const newSubmittedShift = new this.submittedShiftModel(submittedShift);
        const newSubmittedShift = {
            userId: submittedShift.userId,
            wantedShifts: submittedShift.wantedShifts,
            comment: submittedShift.comment,
            updateDate: new Date().toLocaleString(),
            createDate: new Date().toLocaleString(),
            shifts: submittedShift.shifts,
        };
        // console.log(newSubmittedShift);
        const saveNewSubmittedShift = new this.submittedShiftModel(newSubmittedShift);
        // console.log("---------------------");
        
        // console.log(saveNewSubmittedShift);
        return await saveNewSubmittedShift.save();
        // console.log(new Date().toLocaleString());
        // console.log(new Date().toLocaleTimeString());
        
        // return await newSubmittedShift.save() 
    }

    async delete(id: string):Promise<SubmittedShift> {
        return await this.submittedShiftModel.findByIdAndRemove(id);
    }

    async update(id: string, submittedShift: SubmittedShift): Promise<SubmittedShift> {
        return await this.submittedShiftModel.findByIdAndUpdate(id, submittedShift, { new: true });
    }
}
