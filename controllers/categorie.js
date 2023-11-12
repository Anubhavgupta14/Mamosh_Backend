const model = require('../models/Categorie');
const Categorie = model.Categorie;
exports.getAll = async (req, res) => {
    try {
        let categories = await Categorie.find();
        console.log(categories, "yo")
        return res.json(categories);
    }
    catch (err) {
        return res.status(404).json({ error: err.message });
    }
}
exports.addNew = async (req, res) => {
    try {
        let categorie = await Member.create(memberData);
        res.json(categorie).status(200);
    }
    catch (err) {
        res.status(err.status).json(err.message)
    }
}