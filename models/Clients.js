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
    email: {
        type: String,
        required: true
    }
});

const ClientModel = mongoose.model('Client', ClientsSchema);
export default ClientModel;