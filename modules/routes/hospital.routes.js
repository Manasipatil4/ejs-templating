import express from "express";
import {
  deletehospital,
  gethospital,
  savehospital,
  Updatehospital,
  getAll,
} from "../controller/hospital.controller.js";
import hospitalCollection from "../model/hospitalmodel.js";

const  hospitalRouter = express();

hospitalRouter.get("/all", getAll);
hospitalRouter.get("/:_id", gethospital);
hospitalRouter.post("/", savehospital);
hospitalRouter.patch("/:_id", Updatehospital);
hospitalRouter.delete("/:_id", deletehospital);

export default  hospitalRouter;


