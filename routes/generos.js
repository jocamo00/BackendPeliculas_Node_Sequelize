const router = require('express').Router();
const { Genero, Pelicula } = require('../models/index.js');


//Mostrar todos los generos
router.get('/', (req, res) => {
    Genero.findAll({
            include: [Pelicula]
        })
        .then(generos => res.send(generos))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar los generos'
            });
        })
})


//Crear un genero
router.post('/', (req, res) => {
    Genero.create({...req.body})
        .then(genero => res.status(201).send(genero))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al crear el genero'
            });
        })
})


module.exports = router;
