const express = require('express');

const routes = express.Router();

const db = require('./db_Query')

// POST register a user
routes.post('/register', async(req, res) => {
    const addAdmin = await db.PostAdmin(req.body)
    res.status(201).send(addAdmin)
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