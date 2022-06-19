import mongoose from "mongoose";

const PhysicalEvaluationSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    personalTrainerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Client"
    },
});

const PhysicalEvaluationModel = mongoose.model('PhysicalEvaluation', PhysicalEvaluationSchema);
export default PhysicalEvaluationModel;