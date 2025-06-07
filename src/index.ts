import express from "express";
import housesRoutes from "./routes/houses";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api", housesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
