import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";  
import { sequelize } from './config/config.js';

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/auth", routes);

sequelize.sync().then(() => {
  console.log('Database synchronized');
  // Start the server
  const port = 5000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
