const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    images: [String],
    video: {
        type: String
    },
    ribbon: {
        type: String,
    },
    info: {
        type: String,
    },
    desc: {
        type: String,
    },
    delivery: {
        type: String,
    },
    returns: {
        type: String,
    },
    priceperunit: {
        type: Number,
    },
    customTexts: [
        {
            textField: String,
            textLimit: Number,
            textMandatory: Boolean
        }
    ],
    sku: {
        type: String,
    },
    variants: [String],
    status: {
        type: Boolean,
    },

    preOrder: {
        type: Boolean,
    },
    categories:[
        {
            name: String,
            imgsrc: String,
            checked: Boolean,
            subCategories: [{
                name: String,
                imgsrc: String,
                checked: Boolean,
            }],
        }
    ]



}, {
    timestamps: true
});

exports.Product = mongoose.model('Product', ProductSchema);
