// This is where i connect to my mongoDB
//remember that it is hosted outside of my computer
import { MongoClient } from "mongodb";

// This is allowing me to access the things that are in the .env
// file - so that i can use sensitive info in my app
// but not upload it to github
import dotenv from "dotenv";
dotenv.config();

// this is creating a new mongoDB client
// we are accessing our .env file (process.env)
// qw are trying to access ATLAS_URI
// make sure this is in your env
const client = new MongoClient(process.env.ATLAS_URI);

let conn;
try {
  conn = await client.connect();
  console.log("connected");
} catch (err) {
  console.log(err);
}

// we are accessing the sample training database in the mongoDB compass sample data
let db = conn.db("sample_training");

export default db;
