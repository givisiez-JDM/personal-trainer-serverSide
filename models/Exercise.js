import mongoose from "mongoose";

const PhysicalActivitySchema = mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    name: {
        type: String,
        required: true
    },
    muscleGroup: {
        type: String,
        required: true
    },
    valence: {
        type: String,
        required: true
    },
    equipment: {
        type: String
    },
});

const PhysicalActivityModel = mongoose.model('PhysicalActivity', PhysicalActivitySchema);
export default PhysicalActivityModel;