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

module.exports = router;
