import Region from "../models/Region.js";

const RegionController = {
  // GET /region
  obtenerTodas: async (req, res) => {
    try {
      const region = await Region.find();
      res.json(region);
    } catch (error) {
      console.error("Error al obtener region:", error);
      res.status(500).json({ mensaje: "Error al obtener region" });
    }
  },

  // GET /region/:id
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

  obtenerPorNombreRegion: async (req, res) => {
  try {
    const { nombre } = req.params;

    // Buscar la región por nombre
    const region = await Region.findOne({ nombre: nombre });
    if (!region) return res.status(404).json({ mensaje: "Región no encontrada" });

    // Buscar recetas de esa región
    const recetas = await receta.find({ region: region._id })
      .populate("region", "nombre descripcion")
      .populate("usuario", "nombre email");

    res.json(recetas);
  } catch (error) {
    console.error("Error al obtener recetas por región:", error);
    res.status(500).json({ mensaje: "Error al obtener recetas por región" });
  }
}
,

  // POST /region
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

  // PUT /region/:id
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

  // DELETE /region/:id
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
