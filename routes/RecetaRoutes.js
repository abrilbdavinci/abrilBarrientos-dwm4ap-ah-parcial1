import express from "express";
import RecetaController from "../controllers/RecetaController.js";

const router = express.Router();

router.get("/", RecetaController.obtenerTodas);
router.get("/:id", RecetaController.obtenerPorId);
router.post("/", RecetaController.crear);
router.put("/:id", RecetaController.actualizar);
router.delete("/:id", RecetaController.eliminar);

export default router;
