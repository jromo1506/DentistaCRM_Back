const express = require('express');
const conectarDB = require('./config/db');
const app = express();
const cors = require("cors");

conectarDB();

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Definir rutas
app.use('/DentalArce', require('./routes/routes'));

// Arrancar el servidor
app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
