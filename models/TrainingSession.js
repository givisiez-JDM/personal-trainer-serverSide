import mongoose from "mongoose";

const ExerciseSchema = mongoose.Schema({
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
        type: String,
        required: true    
    },
    serie: {
        type: Number,
        required: true
    },
    repetition: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
})

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
    personalTrainerName: {
        type: String,
        required: true
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Client"
    },
    clientName: {
        type: String,
        required: true
    },
    exercises: {
        type: [ExerciseSchema],
        default: undefined
    },
    notes: String   
});

const TrainingModel = mongoose.model('TrainingSession', TrainingSchema);
export default TrainingModel;