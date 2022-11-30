import express from "express";
const router=express.Router();
import {getAllTransactions,deleteTransactions, addTransactions } from "../helper.js";

//post method - to insert data to db
// router.post("/", async (request, response) => {
//     const newMovies = request.body;
//     console.log(newMovies);
//     //db.movies.insertMany(movies)
//     const result = await addMovies(newMovies);
  
//     response.send(result);
//   })
  
router.post("/", async (req, res,transaction) => {
  //const transaction = request.body;
  console.log(transaction);
  const result = await addTransactions(transaction);

  response.send(result);
})

  router.get("/", async (req,res)=>{

      let transactions=await getAllTransactions(req);
      res.send(transactions)
  })

  router.delete("/", async (req,res)=>{
 // take params
    const {_id} = req.params;
    let transactions=await deleteTransactions(_id);

    res.send(transactions)
})
  
  export const transactionRouter=router;