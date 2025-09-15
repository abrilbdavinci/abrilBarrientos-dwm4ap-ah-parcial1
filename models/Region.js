import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String }
});

export default mongoose.model("Region", regionSchema, "region");

