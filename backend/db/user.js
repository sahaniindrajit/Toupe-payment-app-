import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 3,
        trim: true,
        required: true,
    },

    lastName: {
        type: String,
        minlength: 3,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        minlength: 6,
        trim: true,
        required: true,
    }
})

export default mongoose.model('User', userSchema);

