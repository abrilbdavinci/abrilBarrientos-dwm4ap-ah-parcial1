import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  recetas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Receta" }]
});

export default mongoose.model("Usuario", usuarioSchema);
