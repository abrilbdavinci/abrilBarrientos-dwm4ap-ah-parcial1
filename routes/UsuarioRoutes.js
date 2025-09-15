import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.obtenerTodos);
router.get("/:id", UsuarioController.obtenerPorId);
router.post("/", UsuarioController.crear);
router.put("/:id", UsuarioController.actualizar);
router.delete("/:id", UsuarioController.eliminar);

export default router;
