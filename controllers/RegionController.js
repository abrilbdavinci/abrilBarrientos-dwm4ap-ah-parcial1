import Region from "../models/Region.js";

const RegionController = {
  obtenerTodas: async (req, res) => {
    try {
      const regiones = await Region.find();
      res.json(regiones);
    } catch (error) {
      console.error("Error al obtener regiones:", error);
      res.status(500).json({ mensaje: "Error al obtener regiones" });
    }
  },

  obtenerPorId: async (req, res) => {
    try {
      const region = await Region.findById(req.params.id);
      if (!region) return res.status(404).json({ mensaje: "Región no encontrada" });
      res.json(region);
    } catch (error) {
      console.error("Error al obtener la región:", error);
      res.status(500).json({ mensaje: "Error al obtener la región" });
    }
  },

  crear: async (req, res) => {
    try {
      const nuevaRegion = new Region(req.body);
      await nuevaRegion.save();
      res.status(201).json(nuevaRegion);
    } catch (error) {
      console.error("Error al crear la región:", error);
      res.status(500).json({ mensaje: "Error al crear la región" });
    }
  },

  actualizar: async (req, res) => {
    try {
      const region = await Region.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!region) return res.status(404).json({ mensaje: "Región no encontrada" });
      res.json(region);
    } catch (error) {
      console.error("Error al actualizar la región:", error);
      res.status(500).json({ mensaje: "Error al actualizar la región" });
    }
  },

  eliminar: async (req, res) => {
    try {
      const region = await Region.findByIdAndDelete(req.params.id);
      if (!region) return res.status(404).json({ mensaje: "Región no encontrada" });
      res.json({ mensaje: "Región eliminada" });
    } catch (error) {
      console.error("Error al eliminar la región:", error);
      res.status(500).json({ mensaje: "Error al eliminar la región" });
    }
  }
};

export default RegionController;
