// import required modules

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Longing environment variables from .env file

dotenv.config();

// Creating an instance of express app

const app = express();
const PORT = process.env.PORT = 5000;

// Middleware

app.use(cors()); //# Enable cors
app.use(express.json()); //# Enable json parsing

// Sample API Endpoint

app.get('/api/data', (req, res) =>{
    res.json({ message: "Hello from backend!" });
});

app.get('/api', (req, res) =>{
    res.json({ message: "Hello from Melsoft acardamy" });
});

app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost: ${PORT}`);
});