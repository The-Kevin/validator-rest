import express from "express";
import cors from "cors";
import database from "../src/database/connect";
import { config } from "dotenv";

import routesUser from "./modules/user/routes";

config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "test") {
  database();
}

app.use("/user", routesUser);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, (): void => {
    console.log(`running in http://localhost:${port}`);
    console.log(app.response.status(200)["statusCode"]);
  });
}

export default app;
