const mongoose = require('mongoose');

const CategorieSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    imgsrc:{
        type: String,
    },
    subCategories:[
            {
                name:{
                    type: String,
                },
                imgsrc:{
                    type: String,
                }
            }
        ],
    order: {
        type: Number,
    }
}, {
    timestamps: true
});

exports.Categorie = mongoose.model('Categorie', CategorieSchema);
