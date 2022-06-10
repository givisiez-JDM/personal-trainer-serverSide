import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
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

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;