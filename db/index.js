const pg = require("pg");
const bcrypt = require("bcrypt");

const client = new pg.Client("postgres://localhost/AcmeStore");

// NEED TO UPDATE TO ONLY PULL FOR A GIVEN USER
const fetchAllFavorites = async () => {
  const response = await client.query(
    `SELECT * FROM favorites ORDER BY id ASC`
  );
  return response.rows;
};

const fetchFavorites = async (user_id) => {
  const response = await client.query(
    `SELECT * FROM favorites WHERE user_id = $1`,
    [user_id]
  );
  return response.rows;
};

// NEED TO UPDATE USER PULL TO ALSO PULL IN FAVORITES, AND THEN FROM THERE DELETE FAVS FROM USER LIST

const deleteFavorite = async (user_id, body) => {
  await client.query(`DELETE from `);
};

// study these

module.exports = {
  client,
  fetchFavorites,

  fetchAllFavorites,
}; //you forgot to export the client
