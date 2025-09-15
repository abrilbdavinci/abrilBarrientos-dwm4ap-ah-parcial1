import express from "express";
import RegionController from "../controllers/RegionController.js";

const router = express.Router();

router.get("/", RegionController.obtenerTodas); // GET /regiones
router.get("/:id", RegionController.obtenerPorId); // GET /regiones/:id
router.post("/", RegionController.crear); // POST /regiones
router.put("/:id", RegionController.actualizar); // PUT /regiones/:id
router.delete("/:id", RegionController.eliminar); // DELETE /regiones/:id

export default router;
