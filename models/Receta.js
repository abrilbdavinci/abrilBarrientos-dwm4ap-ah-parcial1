import mongoose from "mongoose";

const RecetaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  ingredientes: { type: String, default: "" }, 
  region: { type: mongoose.Schema.Types.ObjectId, ref: "Region" },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  esVegano: { type: Boolean, default: false },
  esVegetariano: { type: Boolean, default: false },
  esSinTacc: { type: Boolean, default: false },
  esSinLactosa: { type: Boolean, default: false },
  imagen: { type: String }
});

export default mongoose.model("Receta", RecetaSchema);
