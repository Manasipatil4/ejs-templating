import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
 name: { type: String, unique: true },
 disease: { type: String },
 doctorname: { type: String },
  
});

const hospitalCollection = mongoose.model("hospital", hospitalSchema, "hospital");

export default hospitalCollection;
