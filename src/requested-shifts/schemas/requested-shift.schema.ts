import * as mongoose from 'mongoose';

export const RequestedShiftSchema = new mongoose.Schema({
    adminId: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'},
    recieversIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    dateFrom: String,
    dateTo: String,
    updateDate: String,
    createDate: String,
    shifts: Array,
});