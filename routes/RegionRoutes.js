import express from "express";
import RegionController from "../controllers/RegionController.js";

const router = express.Router();

router.get("/", RegionController.obtenerTodas);
router.get("/:id", RegionController.obtenerPorId);
router.post("/", RegionController.crear);
router.put("/:id", RegionController.actualizar);
router.delete("/:id", RegionController.eliminar);

export default router;
