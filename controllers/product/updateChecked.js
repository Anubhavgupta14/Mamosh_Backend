const model = require('../../models/Product');
const Product = model.Product;

exports.updateChecked = async (req, res) => {
    const { product, category, subcategory } = req.body;

    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { "name": product, "categories.name": category, "categories.subCategories.name": subcategory },
            { $set: { "categories.$[].subCategories.$[inner].checked": true } },
            { arrayFilters: [{ "inner.name": subcategory }], new: true }
          );
  
      if (updatedProduct) {
        res.status(200).json({ success: true, updatedProduct });
      } else {
        res.status(404).json({ success: false, message: 'Product or Subcategory not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
}