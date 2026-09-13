require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const newsRouter = require('./routes/news-routes')
const axios = require('axios');



const app = express()
 app.use(cors());
 app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.log('MongoDB Connection Error:', err));


app.use('/api', newsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});