const router = require('express').Router();

const secteuractivitesRoutes = require('./secteuractivitesController');
const clientRoutes = require('./clientsController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const parametreCompteRoutes = require('./parametreCompteController');

router.use('/api/secteuractivites', secteuractivitesRoutes);
router.use('/api/clients', clientRoutes);
router.use('/api/parametrecomptes', parametreCompteRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);


module.exports = router;
