const router = require('express').Router();
const { Pelicula, Genero } = require('../models/index.js');


//Mostrar todas las peliculas
router.get('/', (req, res) => {
    Pelicula.findAll({
            include: [Genero]
        })
        .then(peliculas => res.send(peliculas))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar las peliculas'
            });
        })
})


module.exports = router;
