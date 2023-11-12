const express = require('express')
const app = express();
const mongoose = require('mongoose');
const categorieRouter = require('./routes/categorie')

async function main() {
    await mongoose.connect('mongodb+srv://zerrorstudios:fnJZVMJbD1unc08J@cluster0.jrtfi4y.mongodb.net/', {
        dbName: 'mamosh',
    });
    console.log("database connected")
}
main().catch(err => console.log(err));

app.use(express.json());

app.use('/api/categories/', categorieRouter.router)
app.listen(process.env.PORT || 3001, () => {
    console.log('listening on port 3001')
})