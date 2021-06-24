import express from "express";
const router = express.Router();

import * as rootController from "../controllers/rootController.js";

router.get("/", rootController.getRoot);

export default router;
