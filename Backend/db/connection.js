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

const mongoose = require('mongoose');

const uri = "mongodb+srv://ankushspencer015:9918919442@cluster0.sffpm.mongodb.net/alumni-portal?retryWrites=true&w=majority";

mongoose.connect(uri, {

})
.then(() => console.log("Mongoose connected to MongoDB Atlas"))
.catch((error) => console.error("Mongoose connection error:", error));
