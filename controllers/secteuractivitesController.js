const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/* retun afficher tous les secteuractivite */
router.get('/', function(req, res) {
    db.secteuractivite.findAll(req.query)
        .then(dbModel => res.json(dbModel));
        /*.catch(err => res.status(422).json(err));*/
});


/* retun afficher secteuractivite avec id */
router.get('/:id', isAuthenticated, function(req, res) {
    db.secteuractivite.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun ajouter secteuractivite */
router.post('/', isAuthenticated, function(req, res) {
    db.secteuractivite.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun modifier secteuractivite avec id */
router.put('/:id', isAuthenticated, function(req, res) {
    db.secteuractivite.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun supprimer secteuractivite avec id */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.secteuractivite.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
