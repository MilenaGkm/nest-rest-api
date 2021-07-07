import * as mongoose from 'mongoose';

export const ShiftSchema = new mongoose.Schema({
    date: String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    shift: String,
});