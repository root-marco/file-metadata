import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// APP
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(cors());
app.use("/public", express.static(`${process.cwd()}/src/public`));

// ROUTES
import rootRouter from "./src/routes/rootRouter.js";
import apiRouter from "./src/routes/apiRouter.js";
app.use("/", rootRouter);
app.use("/api", apiRouter);

// LISTEN
app.listen(PORT, function () {
    console.info(`Your app is listening on port ${PORT}`);
});
