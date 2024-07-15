const { Client } = require('pg');

const client = new Client({
    host: 'localhost',       // o la dirección IP de tu servidor PostgreSQL
    port: 5432,              // puerto por defecto de PostgreSQL
    user: 'postgres',      // tu nombre de usuario de PostgreSQL
    password: 'Exito2024$', // la contraseña de tu usuario de PostgreSQL
    database: 'bd_esfera_inteligente' // el nombre de tu base de datos
});

client.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos', err.stack));

const insertContact = (name, telefono, email, message) => {
    const query = `
    INSERT INTO contactos (name, telefono, email, message)
    VALUES ($1, $2, $3, $4) RETURNING *;
  `;
    const values = [name, telefono, email, message];
    return client.query(query, values);
};

// Insertar datos de prueba
const testInsertions = async () => {
    try {
        const res1 = await insertContact('Juliana Ballesteros', '123445689', 'juliana@example.com', 'Primer mensaje de prueba');
        console.log('Contacto insertado:', res1.rows[0]);

        const res2 = await insertContact('John Marin', '912354321', 'johny@example.com', 'Segundo mensaje de prueba');
        console.log('Contacto insertado:', res2.rows[0]);

        const res3 = await insertContact('Yuli Smart', '552585555', 'Yuli@example.com', 'Tercer mensaje de prueba');
        console.log('Contacto insertado:', res3.rows[0]);
    } catch (err) {
        console.error('Error al insertar datos de prueba', err.stack);
    } finally {
        client.end();
    }
};

testInsertions();
