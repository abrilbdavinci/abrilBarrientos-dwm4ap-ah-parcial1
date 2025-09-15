import express from "express";
import IngredienteController from "../controllers/IngredienteController.js";

const router = express.Router();

router.get("/", IngredienteController.obtenerTodos);
router.get("/:id", IngredienteController.obtenerPorId);
router.post("/", IngredienteController.crear);
router.put("/:id", IngredienteController.actualizar);
router.delete("/:id", IngredienteController.eliminar);

export default router;
