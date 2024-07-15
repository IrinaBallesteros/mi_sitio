// db.js
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Exito2024$',
    database: 'bd_esfera_inteligente'
});

pool.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos', err.stack));

module.exports = pool;
