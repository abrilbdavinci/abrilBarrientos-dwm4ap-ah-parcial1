import Receta from "../models/Receta.js";

const RecetaController = {
  obtenerTodas: async (req, res) => {
    try {
      const recetas = await Receta.find()
        .populate("region", "nombre")
        .populate("usuario", "nombre email");

      // Ya no necesitamos convertir ingredientes a string, porque ya lo es
      res.json(recetas);
    } catch (error) {
      console.error("Error al obtener recetas:", error);
      res.status(500).json({ mensaje: "Error al obtener recetas" });
    }
  },

  obtenerPorId: async (req, res) => {
    try {
      const receta = await Receta.findById(req.params.id)
        .populate("region", "nombre")
        .populate("usuario", "nombre email");

      if (!receta) return res.status(404).json({ mensaje: "Receta no encontrada" });

      res.json(receta);
    } catch (error) {
      console.error("Error al obtener la receta:", error);
      res.status(500).json({ mensaje: "Error al obtener la receta" });
    }
  },

  crear: async (req, res) => {
    try {
      const nuevaReceta = new Receta(req.body);
      const recetaGuardada = await nuevaReceta.save();

      const recetaPopulada = await Receta.findById(recetaGuardada._id)
        .populate("region", "nombre")
        .populate("usuario", "nombre email");

      res.status(201).json(recetaPopulada);
    } catch (error) {
      console.error("Error al crear la receta:", error);
      res.status(500).json({ mensaje: "Error al crear la receta" });
    }
  },

  actualizar: async (req, res) => {
    try {
      const recetaActualizada = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .populate("region", "nombre")
        .populate("usuario", "nombre email");

      if (!recetaActualizada) return res.status(404).json({ mensaje: "Receta no encontrada" });

      res.json(recetaActualizada);
    } catch (error) {
      console.error("Error al actualizar la receta:", error);
      res.status(500).json({ mensaje: "Error al actualizar la receta" });
    }
  },

  eliminar: async (req, res) => {
    try {
      const recetaEliminada = await Receta.findByIdAndDelete(req.params.id);
      if (!recetaEliminada) return res.status(404).json({ mensaje: "Receta no encontrada" });

      res.json({ mensaje: "Receta eliminada" });
    } catch (error) {
      console.error("Error al eliminar la receta:", error);
      res.status(500).json({ mensaje: "Error al eliminar la receta" });
    }
  }
};

export default RecetaController;
