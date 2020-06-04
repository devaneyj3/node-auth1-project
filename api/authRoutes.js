const express = require('express');

const routes = express.Router();

const db = require('./db_Query')

const bcrypt = require('bcryptjs')

// POST register a user
routes.post('/register', async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
    const addAdmin = await db.PostAdmin(req.body)
    
    res.status(201).send(req.body)
})

// //GET login user
// routes.get('/', (req, res) => {
//     res.status(201).send(stuff)
// })

// //GET USERS WHEN LOGGED IN
// routes.get('/', (req, res) => {
//     res.status(204).send(stuff)
// })


module.exports = routes;