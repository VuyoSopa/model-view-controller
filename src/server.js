// in here we setting up our express server and connect it to the MongoDb database

const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1/BookStore').then(() => {
    console.log("Connected!")
}).catch((error) =>{
    console.log("not connected", error)
})

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//mongodb://localhost:27017
