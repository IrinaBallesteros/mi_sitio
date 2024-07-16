const { Pool } = require('pg');
require('dotenv').config();

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);

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
