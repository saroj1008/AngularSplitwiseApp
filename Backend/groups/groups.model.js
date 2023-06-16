import mongoose, { Schema, model } from 'mongoose';

const schema = new Schema({
    title: { type: String, require: true },
    members: [{
        user_id: mongoose.Types.ObjectId,
        fullname: String,
        email: String,
        pending: { type: Boolean, default: true }
    }],
    transactions: [{
        transaction_id:mongoose.Types.ObjectId,
        title: String,
        description: String,
        paid_by: { user_id: mongoose.Types.ObjectId, fullname: String },
        category: String,
        amount: String,
        date: String,
        receipt: { filename: String, originalname: String }
    }],
})

export default model('group', schema)