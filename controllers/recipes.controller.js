import { RecipeModel } from "../models/recipe.js";


export const addRecipe =async (req, res, next) => {
    // Add recipe to database
    try {
      
     //Add recipe to database
        const createResult = await RecipeModel.create ({
          ...req.body,
          image:req.file.filename
        }); 
        // Return response
        res.status(201).json(createResult);
    } catch (error) {
        next(error);
    }

 }

 export const getRecipe =  async (req, res, next) => {
    // Get all recipes from database
   try {
    const findResult = await RecipeModel.find ();
    // return response
    res.status(200).json(findResult);
   } catch (error) {
    next(error);
   }
 }

 export const getSingleRecipe =  (req, res, next) => {
   try {
     res.send(`Get single recipes: ${req.params.id}`);
   } catch (error) {
    next(error);
   }
}

export const updateRecipe = (req, res, next) => {
   try {
     res.send (`Update single recipes: ${req.params.id}`);
   } catch (error) {
    next(error);
   }
}

export const deleteSingleUpdate = (req, res, next) => {
  try {
      res.send(`Delete single recipes: ${req.params.id}`)
  } catch (error) {
    next(error);
  }
 }
