const jwt = require('jsonwebtoken');
const util = require('util');
const router = require('express').Router();
const db = require('../models');

const signAsync = util.promisify(jwt.sign);

router.post('/login', async (req, res) => {
    try {
        
        const { email, password } = req.body;
 
        const client = await db.client.scope('withPassword').findOne({ where: {email:email }});
        if (!client) {
            res.status(400).send('client not found.');
        }
        const isGoodPassword = await client.validPassword(password);
        if (!isGoodPassword) {
            res.status(400).send('Invalid Password.');
        }
        const token = await signAsync(
            { id: client.id, email: client.email },
            process.env.SECRET,
            {
                expiresIn: '24h',
                algorithm: 'HS256'
            }
        );
        res.json({
            token, client: {
                id: client.id,
                email: client.email
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { email, password, nom, prenom, nom_entreprise , newslettre, promotions, jconditions, secteuractiviteId } = req.body;
        const client = await db.client.create({
            email,
            password,
            nom,
            prenom,
            nom_entreprise,
            newslettre, 
            promotions, 
            jconditions,
            secteuractiviteId
        });
        if (!client) {
            res.status(400).send('Cannot create client.');
        }
        const token = await signAsync(
            { id: client.id, email: client.email },
            process.env.SECRET,
            {
                expiresIn: '24h',
                algorithm: 'HS256'
            }
        );
        res.json({
            token, client: {
                id: client.id,
                email: client.email
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
