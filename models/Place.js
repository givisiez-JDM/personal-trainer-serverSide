import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true    
    },
    number: {
        type: String,
        required: true    
    },
    complement: {
        type: String    
    },
    neighboorhood: {
        type: String,
        required: true    
    },
    city: {
        type: String,
        required: true    
    },
    state: {
        type: String,
        required: true    
    },
    zipCode: {
        type: Number,
        required: true    
    },
})

const PlaceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: [AddressSchema],
        required: true
    }
});

const PlaceModel = mongoose.model('Place', PlaceSchema);
export default PlaceModel;