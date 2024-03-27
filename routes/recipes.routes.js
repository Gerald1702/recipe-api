import { Router } from "express";
import { addRecipe, deleteSingleUpdate, getRecipe, getSingleRecipe, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

// Create multer upload middleware
const upload = multer({dest:'uploads/images' });


//Create recipes router
const router = Router();

//Define routes

router.post('/', upload.single('image'), addRecipe);

router.get('/', getRecipe);

 router.get('/:id', getSingleRecipe);

router.patch('/:id', updateRecipe );

router.delete('/:id', deleteSingleUpdate);

//Export Routes
export default router;


