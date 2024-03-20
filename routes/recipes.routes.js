import { Router } from "express";


const router = Router();

//Dfine routes

router.post("/recipes", (req, res) => {
    res.send("Create a new recipe!");
 });

router.get('/recipes', async (req, res) => {
    res.send("Get all recipes!");
 });

 router.get('/recipes/:id', (req, res) => {
    res.send(`Get single recipes: ${req.params.id}`);
});

router.patch('/recipes/:id', (req, res) => {
    res.send (`Update single recipes: ${req.params.id}`);
} );

router.delete('/recipes/:id', (req, res) => {
res.send(`Delete single recipes: ${req.params.id}`)
});

//Export Routes
export default router;


