import { Injectable } from '@nestjs/common';
import { Msg } from './interfaces/msg.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateManyMsgDto } from './dto/create-msg.dto';


@Injectable()
export class MsgsService {
    constructor(@InjectModel('Msg') private readonly msgModel: Model<Msg>) { }

    async findAll(): Promise<Msg[]> {
        return await this.msgModel.find().populate("sender_id").populate("reciever_id").sort({"date": -1});
    }

    async findOne(id: string): Promise<Msg> {
        return await this.msgModel.findOne({ _id: id });
    }

    async createMany(msgMany: CreateManyMsgDto): Promise<void> {
        const msgsToSave = []
        for (let i = 0; i < msgMany.reciever_ids.length; i++) {
            const newMsg = {
                sender_id: msgMany.sender_id,
                reciever_id: msgMany.reciever_ids[i],
                subject: msgMany.subject,
                body: msgMany.body,
                date: Date.now(),
                isActive: true,
            }
            msgsToSave.push(newMsg)
        }
        for (let i = 0; i < msgsToSave.length; i++) {
            const saveSingleMsg = new this.msgModel(msgsToSave[i])
            await saveSingleMsg.save();
        }
    }

    async delete(id: string): Promise<Msg> {
        return await this.msgModel.findByIdAndRemove(id);
    }

    async update(id: string, msg: Msg): Promise<Msg> {
        return await this.msgModel.findByIdAndUpdate(id, msg, { new: true });
    }
}
