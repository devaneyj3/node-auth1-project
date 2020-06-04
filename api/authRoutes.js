const express = require('express');

const routes = express.Router();

const db = require('./db_Query')

const bcrypt = require('bcryptjs')

// POST register a user
routes.post('/register', async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
    await db.PostAdmin(req.body)

    res.status(201).send(req.body)
})

//GET login user
routes.post('/login', async(req, res) => {
    const { username, password} = req.body;

    //finds admin with the passed in username
    const user = await db.findAdmin(username)

    //compare hashes of passwords with the specific username hash
    if (!user || !bcrypt.compareSync(password, user.password)) {
        res.status(401).json({ error: 'Invalid Credentials' })
    }
    else {
        res.status(200).json({ message: `Welcome, ${user.username}` })
    }
})

//GET USERS WHEN LOGGED IN
routes.get('/users', async (req, res) => {
    try {
        const users = await db.getUsers()
        res.status(200).send(users)
        
    } catch (err) {
        res.status(500).json({message: "There is an error with the server"})
    }
})


module.exports = routes;