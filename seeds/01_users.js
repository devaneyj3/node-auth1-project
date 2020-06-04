
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'devaneyj3', first_name: 'Jordan', last_name: 'Devaney', address: 'Whitmore Lake, MI'},
        { id: 2, username: 'JonBoy', first_name: 'Jon', last_name: 'Doe', address: 'Bethesda, NY'},
        { id: 3, username: 'TomRiddle', first_name: 'Tom', last_name: 'Riddle', address: 'London, UK'},
        { id: 4, username: 'Harryp', first_name: 'Harry', last_name: 'Potter', address: 'Westington Abbey, UK'},
      ]);
    });
};
