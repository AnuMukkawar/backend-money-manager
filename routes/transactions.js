import express from "express";
const router=express.Router();
import {getAllTransactions,deleteTransactions } from "../helper.js";

//post method - to insert data to db
// router.post("/", async (request, response) => {
//     const newMovies = request.body;
//     console.log(newMovies);
//     //db.movies.insertMany(movies)
//     const result = await addMovies(newMovies);
  
//     response.send(result);
//   })
  
  
  router.get("/", async (req,res)=>{

      let transactions=await getAllTransactions(req);
  
      res.send(transactions)
  })
  router.delete("/", async (req,res,id)=>{
    let transactions=await deleteTransactions(id);

    res.send(transactions)
})
  
  export const transactionRouter=router;