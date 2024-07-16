// db.js
const { Pool } = require('pg');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const pool = new Pool({
    host: 'dbHost',
    port: 5432,
    user: 'dbUser',
    password: 'dbPassword',
    database: 'bd_esfera_inteligente'
});

pool.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos', err.stack));

module.exports = pool;
