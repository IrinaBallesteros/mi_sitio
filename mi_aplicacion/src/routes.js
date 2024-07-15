// src/routes.js
const express = require('express');
const pool = require('../../mi_api/db/db');
const router = express.Router();

// Crear registro
router.post('/contacto', async (req, res) => {
    const { name, telefono, email, message } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO contacto (name, telefono, email, message) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, telefono, email, message]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Mostrar registros
router.get('/contactos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contactos');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar registro
router.put('contactos/id', async (req, res) => {
    const { id } = req.params;
    const { name, telefono, email, message } = req.body;
    try {
        const result = await pool.query(
            'UPDATE persona SET nombre = $1, telefono = $2, email = $3 WHERE id = $4 RETURNING *',
            [name, telefono, email, message]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Eliminar registro
router.delete('/contactos/id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM persona WHERE id = $1', [id]);
        res.status(200).send('Registro eliminado exitosamente');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Consulta avanzada
router.post('/consulta', async (req, res) => {
    const { query } = req.body;
    try {
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
