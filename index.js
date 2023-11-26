const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const categorieRouter = require('./routes/categorie')
const productRouter = require('./routes/product/product')
const updateRouter = require('./routes/product/updateChecked')


async function main() {
    await mongoose.connect('mongodb+srv://zerrorstudios:fnJZVMJbD1unc08J@cluster0.jrtfi4y.mongodb.net/', {
        dbName: 'mamosh',
    });
    console.log("database connected")
}
main().catch(err => console.log(err));

app.use(express.json());
app.use(cors())

app.use('/api/categories/', categorieRouter.router)
app.use('/api/products/', productRouter.router)
app.use('/api/updateChecked', updateRouter.router)

app.listen(process.env.PORT || 3001, () => {
    console.log('listening on port 3001')
})