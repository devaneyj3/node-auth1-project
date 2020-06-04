
const db = require('../data/db_config');

module.exports = {
    PostAdmin,
}

//POST A PERSON TO BE ADMIN 
function PostAdmin(body) {
    return db('admin').insert(body)
}