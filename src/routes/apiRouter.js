import express from "express";
import multer from "multer";
import * as apiController from "../controllers/apiController.js";

const router = express.Router();

router.post("/fileanalyse", multer().single("upfile"), apiController.fileanalyse);

export default router;