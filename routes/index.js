// routes/index.js
import express from 'express';
import ingredienteRoutes from './IngredienteRoutes.js';
import usuarioRoutes from './UsuarioRoutes.js';
import recetaRoutes from './recetaRoutes.js';
import regionRoutes from './RegionRoutes.js'; 

const router = express.Router();

// Montar rutas
router.use('/ingredientes', ingredienteRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/recetas', recetaRoutes); //
router.use('/region', regionRoutes); 

export default router;
