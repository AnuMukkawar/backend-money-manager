import express from "express";
const router = express.Router();
import { getAllTransactions, deleteTransactions, addTransactions } from "../helper.js";

router.get("/", async (req, res) => {

  let transactions = await getAllTransactions(req);
  res.send(transactions)
})

router.post("/", async (req, res) => {
  const transaction = req.body;
  const result = await addTransactions(transaction);

  res.send(result);
})

router.delete("/", async (req, res) => {
  // take params
  const { _id } = req.query;
  let transactions = await deleteTransactions(_id);

  res.send(transactions)
})

export const transactionRouter = router;