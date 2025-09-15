import Ingrediente from "../models/Ingrediente.js";

// Controlador
const IngredienteController = {
  // Obtener todos los ingredientes
  obtenerTodos: async (req, res) => {
    try {
      const ingredientes = await Ingrediente.find();
      res.status(200).json(ingredientes);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener ingredientes", error: error.message });
    }
  },

  // Obtener ingrediente por ID
  obtenerPorId: async (req, res) => {
    try {
      const ingrediente = await Ingrediente.findById(req.params.id);
      if (!ingrediente) return res.status(404).json({ mensaje: "Ingrediente no encontrado" });
      res.status(200).json(ingrediente);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al buscar ingrediente", error: error.message });
    }
  },

  // Crear ingrediente
  crear: async (req, res) => {
    try {
      const { nombre, region, imagen } = req.body;

      if (!nombre || !region || !imagen) {
        return res.status(400).json({ mensaje: "Debe proporcionar nombre, region e imagen" });
      }

      const nuevoIngrediente = new Ingrediente({ nombre, region, imagen });
      const guardado = await nuevoIngrediente.save();
      res.status(201).json(guardado);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al crear ingrediente", error: error.message });
    }
  },

  // Actualizar ingrediente
  actualizar: async (req, res) => {
    try {
      const { nombre, region, imagen } = req.body;
      const updateData = {};
      if (nombre) updateData.nombre = nombre;
      if (region) updateData.region = region;
      if (imagen) updateData.imagen = imagen;

      const ingrediente = await Ingrediente.findByIdAndUpdate(req.params.id, updateData, { new: true });
      if (!ingrediente) return res.status(404).json({ mensaje: "Ingrediente no encontrado" });

      res.status(200).json(ingrediente);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al actualizar ingrediente", error: error.message });
    }
  },

  // Eliminar ingrediente
  eliminar: async (req, res) => {
    try {
      const ingrediente = await Ingrediente.findByIdAndDelete(req.params.id);
      if (!ingrediente) return res.status(404).json({ mensaje: "Ingrediente no encontrado" });

      res.json({ mensaje: "Ingrediente eliminado" });
    } catch (error) {
      res.status(500).json({ mensaje: "Error al eliminar ingrediente", error: error.message });
    }
  }
};

export default IngredienteController;
