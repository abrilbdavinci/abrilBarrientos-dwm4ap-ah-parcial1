// routes/RecetaRoutes.js
import express from "express";
import RecetaController from "../controllers/RecetaController.js";

const router = express.Router();

// Recetas CRUD
router.get("/", RecetaController.obtenerTodas);
router.get("/:id", RecetaController.obtenerPorId);
router.post("/", RecetaController.crear);
router.put("/:id", RecetaController.actualizar);
router.delete("/:id", RecetaController.eliminar);

// Regiones
router.get("/region", RecetaController.obtenerTodasRegiones);
router.get("/region/:id", RecetaController.obtenerPorIdRegion);

export default router;
