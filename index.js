import express from  'express';
import cors from  "cors";
import bodyParser from "body-parser";
import recipes from './routes/recipes.routes.js';
import mongoose from 'mongoose';
import dotenv from  'dotenv';

//load env variables
// dotenv.config();

//create express app
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

//load routes
app.use(recipes);

// Make database connection
 await mongoose.connect(process.env.MONGO_URI);


//listen for request
app.listen(6000,() => {
    console.log("Server is running on port");
});

