require('dotenv').config();

const { Pool } = require('pg');

// Verifica que las variables de entorno se carguen correctamente
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_PORT:', process.env.DB_PORT);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;

pool.on('connect', () => {
    console.log('Conectado a la base de datos');
});

pool.on('error', (err) => {
    console.error('Error en la conexión a la base de datos', err.stack);
});
