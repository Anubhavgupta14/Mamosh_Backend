const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email:{
        type: String,
    },
    phoneno:{
        type: Number,
    },
    password:{
        type: String,
    },
}, {
    timestamps: true
});

exports.User = mongoose.model('User', UserSchema);