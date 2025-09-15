// models/Receta.js

import mongoose from 'mongoose';

const recetaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  ingredientes: {
    type: String,
    required: true
  },
  // The 'region' field is a reference to another document
  // This is a common way to link data in MongoDB
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'region',
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  esVegano: {
    type: Boolean,
    default: false
  },
  esVegetariano: {
    type: Boolean,
    default: false
  },
  esSinTacc: {
    type: Boolean,
    default: false
  },
  esSinLactosa: {
    type: Boolean,
    default: false
  },
  imagen: {
    type: String,
    required: true
  }
});

// Create the model using the schema
const Receta = mongoose.model("receta", recetaSchema, "recetas");


// Export the model so it can be used in other files
export default Receta;