const express = require('express');
const mongoose = require('mongoose');
const users = require('./controllers/user');
const restaurants = require('./controllers/restaurant');
const menu = require('./controllers/menu');
const order = require('./controllers/order');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/swadish_assignment_DB_flirt', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to MongoDb")
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use('/', users);
app.use('/', restaurants);
app.use('/', menu);
app.use('/', order);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});