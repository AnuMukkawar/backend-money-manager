import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function getAllTransactions(req) {
  return await client
    .db("money_manager")
    .collection("expenses")
    .find({}).toArray();
    
}