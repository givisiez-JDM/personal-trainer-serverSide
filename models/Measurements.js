import mongoose from "mongoose";

export const MeasurementSchema = mongoose.Schema({
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
    }
});

const MeasurementModel = mongoose.model('Measurement', MeasurementSchema);
export default MeasurementModel;