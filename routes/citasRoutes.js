const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

// Rutas para las citas
router.post('/citas', citasController.crearCita);
router.get('/citas', citasController.obtenerCitas);
router.get('/citas/:id', citasController.obtenerCitaPorId);
router.put('/citas/:id', citasController.actualizarCita);
router.delete('/citas/:id', citasController.eliminarCita);

module.exports = router;