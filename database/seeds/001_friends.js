exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('friends')
    .truncate()
    .then(function() {
      return knex('friends').insert([
        {name:'johnny', type: "boyfriend" },
        {name: 'lizzy', type: "the main A1" },
        {name: 'rachel', type: "best friend" },
        {name: 'michael', type: "best friends boyfriend" },
        {name: 'greg', type: "best friends best friend"}
      ]);
    });
};
