
const mongoose = require('mongoose');
const uri = "mongodb+srv://tannus:5AB9f9wE2K8zrfVQ@cluster0.q1bqmqx.mongodb.net/comp229?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to database !!');
  })
  .catch((err)=>{
    console.log('Connection failed !!'+ err.message);
  });;

const db = mongoose.connection;

db.on('error', function() {
  console.log("MongoDB connection error");
  process.exit(0);
})

db.once('open', function(callback) {
  console.log("Connected to MongoDB")
})

module.exports = db;