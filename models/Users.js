import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },    
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;