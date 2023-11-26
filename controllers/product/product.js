const model = require('../../models/Product');
const Product = model.Product;

exports.getAll = async (req, res) => {
    try {
        let products = await Product.find();
        console.log(products, "yo")
        return res.json(products);
    }
    catch (err) {
        return res.status(404).json({ error: err.message });
    }
}
exports.addNew = async (req, res) => {
    try {
        let product = req.body;
        console.log(product, "bosy ");
        let newProduct = await Product.create(product);
        res.json(newProduct).status(200);
    }
    catch (err) {
        res.status(err.status).json({ error: err.message })
    }
}
exports.getCategoryProducts = async (req, res) => {
    try {
        let { category, subcategory } = req.query;
        console.log(category, subcategory)
        let products = await Product.find(
            {
                "categories": {
                    $elemMatch: {
                        "name": category,
                        // "checked": true,
                        "subCategories": {
                            $elemMatch: {
                                "name": subcategory,
                                "checked": true,
                            }   
                        }
                        

                    }
                }
            }
        );
        console.log(products, "products_)")
        res.status(200).send(products)
    }
    catch (err) {
        res.status(err.status).json({ error: err.message })
    }
}
exports.getNonCategoryProducts = async (req, res) => {
    try {
        let { category, subcategory } = req.query;
        console.log(category, subcategory)
        let products = await Product.find(
            {
                "categories.name":category,
                "categories.subCategories": {
                  $elemMatch: {
                    name: subcategory,
                    checked: { $ne: true }
                  }
                }
              }
        );
        console.log(products, "products_)")
        res.status(200).send(products)
    }
    catch (err) {
        res.status(err.status).json({ error: err.message })
    }
}