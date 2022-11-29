import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function getAllTransactions(req) {
  return await client
    .db("money_manager")
    .collection("expenses")
    .find({}).toArray();
    
}
export async function deleteTransactions(_id) {
  return await client
    .db("money_manager")
    .collection("expenses")
    .deleteOne(_id);
    
}