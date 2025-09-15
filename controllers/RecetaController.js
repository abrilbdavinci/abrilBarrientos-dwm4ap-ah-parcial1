// controllers/RecetaController.js
import mongoose from "mongoose"; // IMPORTANTE: agregar mongoose
import Receta from "../models/Receta.js";
import Region from "../models/Region.js";

const RecetaController = {
  // Obtener todas las recetas con su región
  obtenerTodas: async (req, res) => {
    try {
      console.log("Obteniendo todas las recetas...");
      const recetas = await Receta.find().populate("region", "nombre descripcion");
      console.log(`Recetas obtenidas: ${recetas.length}`);
      res.json(recetas);
    } catch (error) {
      console.error("Error en obtenerTodas:", error.message);
      res.status(500).json({ mensaje: "Error al obtener recetas" });
    }
  },

  // Obtener receta por ID
  obtenerPorId: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(`Obteniendo receta con ID: ${id}`);
      const receta = await Receta.findById(id).populate("region", "nombre descripcion");

      if (!receta) {
        console.warn(`Receta no encontrada: ${id}`);
        return res.status(404).json({ mensaje: "Receta no encontrada" });
      }

      res.json(receta);
    } catch (error) {
      console.error("Error en obtenerPorId:", error.message);
      res.status(500).json({ mensaje: "Error al obtener la receta" });
    }
  },

  // Obtener todas las regiones
  obtenerTodasRegiones: async (req, res) => {
    try {
      console.log("Obteniendo todas las regiones...");
      const regiones = await Region.find();
      console.log(`Regiones obtenidas: ${regiones.length}`);
      res.json(regiones);
    } catch (error) {
      console.error("Error en obtenerTodasRegiones:", error.message);
      res.status(500).json({ mensaje: "Error al obtener regiones" });
    }
  },

  // Obtener recetas por ID de región
  obtenerPorIdRegion: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(`Obteniendo recetas de la región: ${id}`);

      // Convertir string a ObjectId
      const regionObjectId = new mongoose.Types.ObjectId(id);


      // Buscar recetas que tengan esa región
      const recetas = await Receta.find({ region: regionObjectId }).populate("region", "nombre descripcion");

      console.log(`Recetas encontradas: ${recetas.length}`);
      res.json(recetas);
    } catch (error) {
      console.error("Error en obtenerPorIdRegion:", error.message);
      res.status(500).json({ mensaje: "Error al obtener recetas por región" });
    }
  },

  // Crear nueva receta
  crear: async (req, res) => {
    try {
      console.log("Creando nueva receta...");
      const nuevaReceta = new Receta(req.body);
      await nuevaReceta.save();
      console.log("Receta creada:", nuevaReceta._id);
      res.status(201).json(nuevaReceta);
    } catch (error) {
      console.error("Error en crear:", error.message);
      res.status(500).json({ mensaje: "Error al crear receta" });
    }
  },

  // Actualizar receta existente
  actualizar: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(`Actualizando receta con ID: ${id}`);
      const recetaActualizada = await Receta.findByIdAndUpdate(id, req.body, { new: true });

      if (!recetaActualizada) {
        console.warn(`Receta no encontrada para actualizar: ${id}`);
        return res.status(404).json({ mensaje: "Receta no encontrada" });
      }

      res.json(recetaActualizada);
    } catch (error) {
      console.error("Error en actualizar:", error.message);
      res.status(500).json({ mensaje: "Error al actualizar receta" });
    }
  },

  // Eliminar receta
  eliminar: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(`Eliminando receta con ID: ${id}`);
      const recetaEliminada = await Receta.findByIdAndDelete(id);

      if (!recetaEliminada) {
        console.warn(`Receta no encontrada para eliminar: ${id}`);
        return res.status(404).json({ mensaje: "Receta no encontrada" });
      }

      res.json({ mensaje: "Receta eliminada correctamente" });
    } catch (error) {
      console.error("Error en eliminar:", error.message);
      res.status(500).json({ mensaje: "Error al eliminar receta" });
    }
  },
};

export default RecetaController;
