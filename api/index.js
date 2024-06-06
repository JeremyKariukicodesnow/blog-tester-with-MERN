const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();
const port = 3700;

// Middleware
app.use(bodyParser.json());
app.use(cors({credentials:true, origin:'http://localhost:3000'}));

// MongoDB Connection
const uri = 'mongodb+srv://jeremymwangikariuki:zd4odVMPwmlf4i4j@cluster0.co6x1fe.mongodb.net/myDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
  .catch(error => console.error('Error connecting to MongoDB Atlas: ', error));

// Registration Endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    const user = await User.create({ username, password: hash });
    res.status(201).send({ message: 'Registration successful', user });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error });
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user._id, username: user.username }, 'secret', { expiresIn: '1h' });
      res.status(200).send({ message: 'Login successful', token })
      res.cookie('token',token).json('ok');
    } else {
      res.status(401).send({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error logging in', error });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
