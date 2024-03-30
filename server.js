const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL;
app.use(cors());
app.use(express.json());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//DB connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connected!!");
})

app.listen(port, () => {
    console.log("PORT connected on " + port)
})

//sample route
const sampleRoterrr = require('./routes/sampleRoute');
app.use('/api/smaple', sampleRoterrr);