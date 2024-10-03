const express = require('express');
const router = express.Router();

const Usuario = require('../controllers/usuario.controllers');
const Libro = require('../controllers/libro.controllers'); 
const Autor = require('../controllers/autor.controllers');


// Rutas para el controlador de usuario
router.post('/api/usuario/create', Usuario.create);
router.get('/api/usuario/all', Usuario.findAll);
router.get('/api/usuario/onebyid/:id', Usuario.findById);
router.put('/api/usuario/update/:id', Usuario.update);
router.delete('/api/usuario/delete/:id', Usuario.delete);

// Rutas para el controlador de libro
router.post('/api/libro/create', Libro.create);
router.get('/api/libro/all', Libro.findAll);
router.get('/api/libro/onebyid/:id', Libro.findById);
router.put('/api/libro/update/:id', Libro.update);
router.delete('/api/libro/delete/:id', Libro.delete);

// Rutas para el controlador de autor
router.post('/api/autor/create', Autor.create);
router.get('/api/autor/all', Autor.findAll);
router.get('/api/autor/onebyid/:id', Autor.findById);
router.put('/api/autor/update/:id', Autor.update);
router.delete('/api/autor/delete/:id', Autor.delete);

module.exports = router;
