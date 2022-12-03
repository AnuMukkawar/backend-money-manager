import { client } from "./index.js";
import { ObjectId } from "mongodb";

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
    .deleteOne({"_id":ObjectId(_id)});
    
}
export async function addTransactions(transaction) {
  return await client
    .db("money_manager")
    .collection("expenses")
    .insertOne(transaction);
    
}