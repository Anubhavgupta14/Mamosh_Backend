const mongoose = require('mongoose');

const CategorieSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: false,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

exports.Categorie =  mongoose.model('Categorie', CategorieSchema);
