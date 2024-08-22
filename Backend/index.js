const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating tokens

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
require('./db/connection');

// Models
const Users = require('./Models/User');
const Colleges = require('./Models/College');
const AlumniGroup = require('./Models/AlumniGroup');
const Student = require('./Models/Student');

// Register routes
app.post('/register-alumni', async (req, res) => {
  try {
    const alumniData = req.body;
    const hashedPassword = await bcrypt.hash(alumniData.password, 10);
    const newAlumni = new AlumniGroup({ ...alumniData, password: hashedPassword });
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
    const hashedPassword = await bcrypt.hash(collegeData.password, 10);
    const newCollege = new Colleges({ ...collegeData, password: hashedPassword });
    await newCollege.save();
    res.status(201).json({ message: 'College registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering college', error });
  }
});

app.post('/register-student', async (req, res) => {
  try {
    const studentData = req.body;
    const hashedPassword = await bcrypt.hash(studentData.password, 10);
    const newStudent = new Student({ ...studentData, password: hashedPassword });
    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering student', error });
  }
});

// Login routes
const authenticateUser = async (model, emailOrPhone, password) => {
  const user = await model.findOne({ emailOrPhone });
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
};

app.post('/login-alumnilist', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const user = await authenticateUser(AlumniGroup, emailOrPhone, password);
    if (user) {
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
});

app.post('/login-colleges', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const user = await authenticateUser(Colleges, emailOrPhone, password);
    if (user) {
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
});

app.post('/login-students', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const user = await authenticateUser(Student, emailOrPhone, password);
    if (user) {
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
});

// Test route
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
