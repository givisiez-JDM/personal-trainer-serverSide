import mongoose from "mongoose";

const TrainingSchema = mongoose.Schema({
    date: {
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
    activities: {
        type: [],
        required: true
    }
});

const TrainingModel = mongoose.model('TrainingSession', TrainingSchema);
export default TrainingModel;