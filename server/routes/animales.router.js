const express = require('express');
const AnimalesService = require('../services/animales.service');
const router = express.Router();
const service = new AnimalesService();

// Crear
router.post('/', async function(req,res,next){
    try {
        console.error(req.body);
        res.json(await service.crear(req.body));
    } catch (error) {
        console.error(`ERROR EN ALTA: `, error.message);
        next(error);
    }
});
  
// Consultar todo
router.get('/', async function(req,res,next){
    try {
        res.json(await service.consultar());
    } catch (error) {
        console.error(`ERROR EN CONSULTA: `, error.message);
        next(error);
    }
});

// Consultar uno
router.get('/:id',async function(req,res,next) {
    try {
        res.json(await service.consultarUno(req.params.id));
    } catch (error) {
        console.error(`ERROR EN CONSULTA ESPECÍFICA: `, error.message);
        next(error);
    }
});

// Actualizar
router.put('/:id', async function(req,res,next){
try {
    res.json(await service.actualizar(req.params.id, req.body));
} catch (error) {
    console.error(`ERROR EN MODIFICACIÓN: `, error.message);
    next(error);
}
});

// Eliminar
router.delete('/:id', async function(req,res,next){
try {
    res.json(await service.eliminar(req.params.id));
} catch (error) {
    console.error(`ERROR EN BAJA: `, error.message);
    next(error);
}
});

module.exports = router;