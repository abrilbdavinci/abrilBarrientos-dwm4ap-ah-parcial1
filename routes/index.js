import express from "express";
import RecetaRoutes from "./RecetaRoutes.js";
import UsuarioRoutes from "./UsuarioRoutes.js";
import IngredienteRoutes from "./IngredienteRoutes.js";
import RegionRoutes from "./RegionRoutes.js";

const router = express.Router();

router.use("/recetas", RecetaRoutes);
router.use("/usuarios", UsuarioRoutes);
router.use("/ingredientes", IngredienteRoutes);
router.use("/region", RegionRoutes);

export default router;
