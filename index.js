import express from "express";
import { createEmployee, deleteEmployee, getAllEmployees, getParticularEmployee, homePage, updateEmployee } from "./models/controllers/employeeController.js";
import mongoose from "mongoose";

const app = express();

const uri =
  "mongodb+srv://<username>:<password>@mycluster.eprnomb.mongodb.net/<Collectionname>?retryWrites=true&w=majority";

const connectDB = async()=> {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
      console.log("Server running on 8000");
    });
  } catch (error) {
    console.log("Error While connecting " + error.message);
  }
}

connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/",homePage);

app.get("/employee",getAllEmployees);

app.get("/employee/:id",getParticularEmployee);

app.post("/employee",createEmployee);

app.put("/employee/:id",updateEmployee);

app.delete("/employee/:id",deleteEmployee);

