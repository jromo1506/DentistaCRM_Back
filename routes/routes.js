const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuariosController');
const citasController = require('../controllers/citasController');
const doctorController = require('../controllers/doctorController');

router.post('/user/', usuarioController.crearUsuario);
router.post('/usuarios/auth', usuarioController.autenticarUsuario);
router.get('/user/', usuarioController.obtenerUsuarios);
router.get('/user/:id', usuarioController.obtenerUsuarioPorId);
router.put('/user/:id', usuarioController.actualizarUsuario);
router.delete('/user/:id', usuarioController.eliminarUsuario);

router.post('/citas', citasController.crearCita);
router.get('/citas', citasController.obtenerCitas);
router.get('/citas/:id', citasController.obtenerCitaPorId);
router.put('/citas/:id', citasController.actualizarCita);
router.delete('/citas/:id', citasController.eliminarCita);

router.post('/doctor', doctorController.crearDoctor);
router.get('/doctor', doctorController.obtenerDoctores);
router.get('/doctor/:id', doctorController.obtenerDoctorPorId);
router.put('/doctor/:id', doctorController.actualizarDoctor);
router.delete('/doctor/:id', doctorController.eliminarDoctor);

module.exports = router;