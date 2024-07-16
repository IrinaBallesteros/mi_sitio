const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'dbUser',
    host: 'dbHost',
    database: 'bd_esfera_inteligente',
    password: 'dbPassword',
    port: 5432,
});

pool.on('connect', () => {
    console.log('Conectado a la base de datos');
});

pool.on('error', (err) => {
    console.error('Error en la conexión a la base de datos', err.stack);
});

module.exports = pool;
