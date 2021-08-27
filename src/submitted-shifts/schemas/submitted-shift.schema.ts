import * as mongoose from 'mongoose';

export const SubmittedShiftSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    wantedShifts: Number,
    comment: String,
    updateDate: String,
    createDate: String,
    shifts: Array,
});