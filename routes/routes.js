const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuariosController');

router.post('/user/', usuarioController.crearUsuario);
router.get('/user/', usuarioController.obtenerUsuarios);
router.get('/user/:id', usuarioController.obtenerUsuarioPorId);
router.put('/user/:id', usuarioController.actualizarUsuario);
router.delete('/user/:id', usuarioController.eliminarUsuario);


module.exports = router;