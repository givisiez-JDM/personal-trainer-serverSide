import mongoose from "mongoose";
import FatDataModel from "./FatData";
import MeasurementModel from "./Measurements";

const PhysicalEvaluationSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: new Date(),
        immutable: true
    },
    personalTrainerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    personalTrainerName: {
        type: String
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Client"
    },
    clientName: {
        type: String
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    Measurements: {
        type: [MeasurementModel],
        required: true
    },
    fatData: {
        type: [FatDataModel],
        required: true
    },
    notes: {
        type: String
    }
});

const PhysicalEvaluationModel = mongoose.model('PhysicalEvaluation', PhysicalEvaluationSchema);
export default PhysicalEvaluationModel;