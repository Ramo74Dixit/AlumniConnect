const express = require('express');
const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(cors());

require('./db/connection');
const Users = require('./Models/User');
const Colleges=require('./Models/College')
const alumnilist=require('./Models/AlumniGroup')

app.post('/register-alumni', async (req, res) => {
    try {
      const alumniData=req.body;
      const newAlumni = new alumnilist(alumniData);
      await newAlumni.save();
      res.status(201).send({ message: 'Alumni registered successfully!' });
    } catch (error) {
      console.error('Error registering alumni:', error);
      res.status(500).json({ message: 'Error registering Alumni', error });
    }
  });
  
app.post('/register-college', async (req, res) => {
    try {
      const collegeData = req.body;
      const newCollege = new Colleges(collegeData);
      await newCollege.save();
      res.status(201).json({ message: 'College registered successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering college', error });
    }
  });
app.post("/", async (req, res) => {
    try {
        let user = new Users(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: "Failed to save user data" });
    }
});
app.get("/users", async (req, res) => {
    try {
        let users = await Users.find(); // Fetch all documents in the "users" collection
        res.send(users);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch user data" });
    }
});
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
