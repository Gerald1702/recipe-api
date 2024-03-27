import express from  'express';
import cors from 'cors';
import recipes from './routes/recipes.routes.js';
import mongoose from 'mongoose';
import dotenv from  'dotenv';

//load env variables
dotenv.config();

//create express app
const app = express();

//Apply middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.static('uploads'));

//load routes
app.use('/recipes', recipes);

// Make database connection
 await mongoose.connect(process.env.MONGO_URI);


//listen for request
app.listen(4000,() => {
    console.log("Server is running on port");
});

