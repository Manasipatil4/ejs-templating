import express from "express";
import hospitalRouter from "./hospital.routes.js";

const Router = express();
Router.use("/hospital", hospitalRouter);

export default Router;
