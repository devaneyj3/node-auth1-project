const express = require('express');
const session = require('express-session');

const authRoutes = require('./api/authRoutes');
const server = express(); 


// configure express-session middleware
server.use(
    session({
        name: 'User', // default is connect.sid
        secret: 'Never kick Tim',
        cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            secure: false, // only set cookies over https. Server will not send back a cookie over http.
        }, // 1 day in milliseconds
        httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
        resave: false,
        saveUninitialized: false,
    })
    );
    
    server.use(express.json());
    
    server.use('/api/auth', authRoutes);
    
    server.get('/', (req, res) => {
        res.status(200).send('The App is working');
})

const PORT = 5001;

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})