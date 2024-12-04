import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";  

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/auth", routes);

const port = 5000;
app.listen(port, () => console.log(`${port}`));
