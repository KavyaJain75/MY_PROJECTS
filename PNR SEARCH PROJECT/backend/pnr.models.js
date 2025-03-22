import mongoose from "mongoose";

const pnrSchema = new mongoose.Schema({
    pnr_number: {
        type: String,
        required: true, 
        unique: true
    },
    train_number: {
        type: String,
        required: true
    },
    train_name: {
        type: String,
        required: true
    },
    passenger_name: {
        type: String,
        required: true
    },
    journey_date: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    coach: {
        type: String,
        required: true
    },
    seat_number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Confirmed", "Waiting", "RAC"], 
        required: true
    }
    
})

export const PNR = mongoose.model("PNR", pnrSchema);