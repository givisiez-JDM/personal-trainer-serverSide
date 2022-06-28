import mongoose from "mongoose";

export const FatDataSchema = mongoose.Schema({
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
    }
});

const FatDataModel = mongoose.model('FatData', FatDataSchema);
export default FatDataModel;