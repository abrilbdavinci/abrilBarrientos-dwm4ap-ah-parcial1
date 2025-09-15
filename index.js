import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Importa todos los modelos para registrar esquemas
import './models/Usuario.js';
import './models/Receta.js';
import './models/Region.js';
import './models/Ingrediente.js';


// Importar rutas
import routerApi from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI;

const app = express();

// Conexión a MongoDB
mongoose
  .connect(DB_URI)
  .then(() => console.log(chalk.green("✅ Conexión con MongoDB exitosa")))
  .catch((error) => console.error(chalk.red("❌ Error al conectar a MongoDB:", error)));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de rutas estáticas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Montar rutas
app.use("/", routerApi);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(chalk.green(`🚀 Servidor Web corriendo en http://localhost:${PORT}`));
});
