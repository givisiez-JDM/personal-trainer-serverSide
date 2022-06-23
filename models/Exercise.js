import mongoose from "mongoose";

const PhysicalActivitySchema = mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    }
});

const PhysicalActivityModel = mongoose.model('PhysicalActivity', PhysicalActivitySchema);
export default PhysicalActivityModel;