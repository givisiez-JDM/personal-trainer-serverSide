import mongoose from "mongoose";

const ClientsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }, 
    gender: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true
    },    
    email: {
        type: String,
        required: true
    },    
    profession: {
        type: String,
        required: true
    },  
    objective: {
        type: String,
        required: true
    },
    personalTrainerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    personalTrainerName: {
        type: String,
        required: true
    }
});

const ClientModel = mongoose.model('Client', ClientsSchema);
export default ClientModel;