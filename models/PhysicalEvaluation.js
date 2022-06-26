import mongoose from "mongoose";

const PhysicalEvaluationSchema = mongoose.Schema({
    createdAt: {
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
    IMC: {
        type: Number,
        required: true
    },
    abdomenMeasure: {
        type: Number,
        required: true
    },
    neckMeasure: {
        type: Number,
        required: true
    },
    chestMeasure: {
        type: Number,
        required: true
    },
    hipMeasure: {
        type: Number,
        required: true
    },
    armsMeasure: {
        type: Number,
        required: true
    },
    forearmsMeasure: {
        type: Number,
        required: true
    },
    wristsMeasure: {
        type: Number,
        required: true
    },
    thighMeasure: {
        type: Number,
        required: true
    },
    calfMeasure: {
        type: Number,
        required: true
    },
    fatSubscapularis: {
        type: Number,
        required: true
    },
    fatTriceps: {
        type: Number,
        required: true
    },
    fatBreastplate: {
        type: Number,
        required: true
    },
    fatMidAxillary: {
        type: Number,
        required: true
    },
    fatSuprailiac: {
        type: Number,
        required: true
    },
    fatAbdominal: {
        type: Number,
        required: true
    },
    fatMidFemoral: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    }
});

const PhysicalEvaluationModel = mongoose.model('PhysicalEvaluation', PhysicalEvaluationSchema);
export default PhysicalEvaluationModel;