const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
// const userRoutes = require('./routes/userRoutes');


const app = express();

mongoose();

// Middleware
app.use(cors());
app.use(helmet()); // adds security headers
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // 100 requests per 15 mins

app.get("/", (req, res)=>{
  const result =   req.headers['user-agent'];
    console.log(result);
    
    res.send("API is running...");
})

// Routes
// app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));