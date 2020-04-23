const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100
    },

    lastName: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    sex: {
        type: String,
        enum: ['Male', 'Female'],
    },
    maritalStatus: {
        type: String,
        enum: ['Single', 'Married', 'Divorced'],
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default: 0
    },
    token:{
        type:String
    }
}, 
{ 
    timestamps: true 
});

const User = mongoose.model('User', userSchema);
module.exports = User ;