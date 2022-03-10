const express = require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const res = require('express/lib/response');
const userRoutes = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoute)

app.get('/', (req, res) =>{
    res.send("Welcome to my homepage")
})
app.get('/users', (req, res) =>{
    res.send("Welcome to user homepage")
})

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}, ()=>{
    console.log ('connected to mongodb')
})

app.listen(8000,()=>
console.log('Backend server is running'))