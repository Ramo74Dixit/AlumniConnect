// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/alumni-portal', {

// })
// .then(() => {
//   console.log("Connected to MongoDB successfully!");
// })
// .catch((error) => {
//   console.error("Error connecting to MongoDB:", error);
// });


// db/connection.js

require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  // Add your options here if needed
})
.then(() => console.log("Mongoose connected to MongoDB Atlas"))
.catch((error) => console.error("Mongoose connection error:", error));

