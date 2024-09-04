import express, { Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
// Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript!");
});

app.listen(PORT, () => {
  console.log(`SERVIDOR EN: http://localhost:${PORT}`);
});
