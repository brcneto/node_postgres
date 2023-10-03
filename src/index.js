const express = require('express');

const pool = require('./connection');

//const { Client } = require('pg');


const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

  try {
    //await client.connect();

    const resultado = await pool.query('select * from empresas');

    //await client.end();

    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }

});

app.listen(8080, () => console.log('Servidor escutando http://localhost:8080'));