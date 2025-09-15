// models/Region.js
import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, default: "" },
});

// Se fuerza a usar la colección exacta 'region'
const Region = mongoose.model("region", regionSchema, "region");

export default Region;
