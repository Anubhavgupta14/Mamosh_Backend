const model = require('../models/Categorie');
const Categorie = model.Categorie;
exports.getAll = async (req, res) => {
    try {
        let categories = await Categorie.find().sort('order');
        // console.log(categories, "yo")
        return res.json(categories);
    }
    catch (err) {
        return res.status(404).json({ error: err.message });
    }
}
exports.addNew = async (req, res) => {
    try {
        let categorie = await Categorie.create(req.body);
        return res.json(categorie).status(200);
    }
    catch (err) {
        return res.status(err.status).json(err.message)
    }
}
exports.changeOrder = async(req, res) =>{
    console.log("running back")
    try{
        console.log(req.body,"front")
        let {id1,id2} = req.body;
        let obj1 = await Categorie.findById(id1);
        let id_1 = obj1.order;
        
        let obj2 = await Categorie.findById(id2);
        let id_2 = obj2.order;

        await Categorie.findByIdAndUpdate(id1,{order:id_2});
        await Categorie.findByIdAndUpdate(id2,{order:id_1});
        let categories = await Categorie.find();
        return res.status(200).json(categories)

    }
    catch(err){
        return res.status(err.status).json({error:err.message})
    }

}
