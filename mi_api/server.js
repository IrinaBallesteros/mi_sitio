const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3002;

// Configura el middleware
app.use(bodyParser.json());
app.use(cors());

// Configura la conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_esfera_inteligente',
    password: 'Exito2024$',
    port: 5432,
});

// Ruta para manejar la solicitud POST del formulario
app.post('/api/contactos', async (req, res) => {
    const { name, telefono, email, message } = req.body;

    try {
        await pool.query(
            'INSERT INTO contactos (name, telefono, email, message) VALUES ($1, $2, $3, $4)',
            [name, telefono, email, message]
        );
        res.status(200).send('Mensaje enviado con éxito');
    } catch (error) {
        console.error('Error al insertar los datos en la base de datos', error);
        res.status(500).send('Error al enviar el mensaje');
    }
});

// Ruta para manejar las solicitudes GET a la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Esfera Inteligente');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
