const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 9000;
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/mi-base-de-datos';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });   