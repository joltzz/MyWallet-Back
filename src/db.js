import { MongoClient, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient= new MongoClient(process.env.MONGO_URI);

await mongoClient.connect();

const db=mongoClient.db("mywallet-back");

export default db;

