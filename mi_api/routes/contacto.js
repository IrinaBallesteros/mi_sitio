import pool from '../db/db'; // Asegúrate de que la ruta sea correcta

const express = require('express');
const router = express.Router();
router.post('/contacto', async (req, res) => {
    const { name, telefono, email, message } = req.body;
    try {
        const query = `
            INSERT INTO contactos (name, telefono, correo, message)
            VALUES ($1, $2, $3, $4) RETURNING *;
        `;
        const values = [name, telefono, email, message];
        const result = await pool.query(query, values); // Usar pool.query en lugar de pool
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Error al insertar datos', err.stack);
        res.status(500).json({ error: 'Error al insertar datos' });
    }
});

module.exports = router;
