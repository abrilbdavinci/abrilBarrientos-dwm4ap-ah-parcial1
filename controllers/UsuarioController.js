import Usuario from "../models/Usuario.js";

const UsuarioController = {
  obtenerTodos: async (req, res) => {
    const usuarios = await Usuario.find().populate("recetas");
    res.json(usuarios);
  },

  obtenerPorId: async (req, res) => {
    const usuario = await Usuario.findById(req.params.id).populate("recetas");
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.json(usuario);
  },

  crear: async (req, res) => {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  },

  actualizar: async (req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.json(usuario);
  },

  eliminar: async (req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.json({ mensaje: "Usuario eliminado" });
  }
};

export default UsuarioController;
