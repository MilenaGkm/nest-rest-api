import * as mongoose from 'mongoose';

export const MsgSchema = new mongoose.Schema({
    sender_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'},
    reciever_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    subject: String,
    body: String,
    date: Date,
    isActive: Boolean,
});