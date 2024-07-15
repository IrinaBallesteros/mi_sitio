const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Configura la conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bd_esfera_inteligente',
  password: 'Exito2024$',
  port: 5432, // Puerto por defecto de PostgreSQL
});

// Maneja la solicitud POST del formulario
router.post('/contacto', async (req, res) => {
  try {
    const { nombre, telefono, correo, mensaje } = req.body;
    await pool.query('INSERT INTO contactos (name, telefono, email, message) VALUES ($1, $2, $3, $4)', [name, telefono, email, message]);
    res.redirect('/contacto'); // Redirige a la página principal
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).send('Error al guardar los datos');
  }
});

module.exports = router;