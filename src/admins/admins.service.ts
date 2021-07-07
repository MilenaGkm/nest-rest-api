import { Injectable } from '@nestjs/common';
import { Admin } from './interfaces/admin.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AdminsService {
    constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin>) { }

    async findAll(): Promise<Admin[]> {
        return await this.adminModel.find();
    }

    async findOne(id: string): Promise<Admin> {
        return await this.adminModel.findOne({ _id: id });
    }

    async create(admin: Admin): Promise<Admin> {
        const newAdmin = new this.adminModel(admin);
        return await newAdmin.save() 
    }

    async delete(id: string):Promise<Admin> {
        return await this.adminModel.findByIdAndRemove(id);
    }

    async update(id: string, admin: Admin): Promise<Admin> {
        return await this.adminModel.findByIdAndUpdate(id, admin, { new: true });
    }
}
