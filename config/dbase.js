require('dotenv/config')
const mongoose = require('mongoose');


function connectDB() {
    // DB connection
    mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => console.log("DB is connected"))
 .catch((err) => console.log(err));
} 


module.exports = connectDB;