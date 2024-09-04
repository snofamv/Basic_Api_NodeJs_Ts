import express, { Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRouter } from "./routes";
// Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(morgan("dev"));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Skeleton de API NodeJs-Typescript",
      version: "1.0.0",
      description: "Documentación de la API de Ejemplo",
      contact: {
        name: "Fabian Niclous",
        email: "fniclous97@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Ruta a los archivos donde están definidas las rutas de tu API
};

// Inicializar Swagger JSDoc
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

// Configurar Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`SERVIDOR EN: http://localhost:${PORT}`);
  console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
});
