# 🇦🇷🍲 API recetas Argentinas

- Nombre y apellido: Abril Barrientos
- Materia: Aplicaciones Híbridas
- Docente: Jonathan Emanuel Cruz
- Comisión: DWM4AP

## Descripción
API para gestionar recetas de cocina argentinas, incluyendo sus region, ingredientes y usuarios. 
Endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre cada colección.

## Tecnologías
- Node.js 
- Express.js
- MongoDB (con Mongoose)
- dotenv (para variables de entorno)
- HTML5
- CSS3 / Bootstrap

## Estructura de la API

### Usuarios
- `GET /usuarios` — Obtener todos los usuarios  
- `GET /usuarios/:id` — Obtener un usuario por ID  
- `POST /usuarios` — Crear un usuario  
- `PUT /usuarios/:id` — Actualizar un usuario  
- `DELETE /usuarios/:id` — Eliminar un usuario  

### recetas
- `GET /recetas` — Obtener todas las recetas  
- `GET /recetas/:id` — Obtener una receta por ID  
- `POST /recetas` — Crear una receta  
- `PUT /recetas/:id` — Actualizar una receta  
- `DELETE /recetas/:id` — Eliminar una receta  

### Ingredientes
- `GET /ingredientes` — Obtener todos los ingredientes  
- `GET /ingredientes/:id` — Obtener un ingrediente por ID  
- `POST /ingredientes` — Crear un ingrediente  
- `PUT /ingredientes/:id` — Actualizar un ingrediente  
- `DELETE /ingredientes/:id` — Eliminar un ingrediente  

### region
- `GET /region` — Obtener todas las region  
- `GET /region/:id` — Obtener una región por ID  
- `POST /region` — Crear una región  
- `PUT /region/:id` — Actualizar una región  
- `DELETE /region/:id` — Eliminar una región  

## Gracias por ver