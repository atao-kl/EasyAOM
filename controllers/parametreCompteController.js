const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/* retun afficher tous les parametrecompte */
router.get('/', function(req, res) {
    db.parametrecompte.findAll(req.query)
        .then(dbModel => res.json(dbModel));
        /*.catch(err => res.status(422).json(err));*/
});


/* retun afficher parametrecompte avec id */
router.get('/:id', isAuthenticated, function(req, res) {
    db.parametrecompte.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun ajouter parametrecompte */
router.post('/', isAuthenticated, function(req, res) {
    db.parametrecompte.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun modifier parametrecompte avec id */
router.put('/:id', isAuthenticated, function(req, res) {
    db.parametrecompte.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun supprimer parametrecompte avec id */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.parametrecompte.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
