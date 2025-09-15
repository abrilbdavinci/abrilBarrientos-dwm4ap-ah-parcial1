import mongoose from "mongoose";

const ingredienteSchema = new mongoose.Schema({
  nombre: String,
  region: String,
  imagen: String
});

export default mongoose.model("Ingrediente", ingredienteSchema);
