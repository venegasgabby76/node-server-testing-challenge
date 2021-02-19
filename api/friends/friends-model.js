const db = require("../../database/dbConfig");

module.exports = {
  getAll,
  insert,
  remove,
};

function getAll() {
  return db("friends");
}

async function insert(friends) {
  const [id] = await db("friends").insert(friends, "id");
  return await db("friends").where({ id }).first();
}

function remove(id) {
  return db("friends").where("id", id).del();
}
