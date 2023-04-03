const mongoose = require('mongoose');
// make connection
mongoose.connect('mongodb://localhost/EcommerceApi');
// store connection into db
const db = mongoose.connection;
// if error in connecting to database
db.on('error',console.error.bind(console,'Error in connecting to mongoDB'));
// on successfully connected to database
db.once('open',function(){
    console.log('Connected to database:: mongoDB');
})