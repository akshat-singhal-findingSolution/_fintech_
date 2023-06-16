import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    software: {
        type: String,
        require: true
    },
    seats: {
        type: Number,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }
})

export const User = mongoose.model('User', userSchema);