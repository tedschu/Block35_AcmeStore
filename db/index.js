const pg = require("pg");
const bcrypt = require("bcrypt");

const client = new pg.Client("postgres://localhost/AcmeStore");

const fetchUsers = async () => {
  const response = await client.query(
    `SELECT id, username FROM users ORDER BY id ASC`
  );
  return response.rows;
};

const fetchProducts = async () => {
  const response = await client.query(`SELECT * FROM products ORDER BY id ASC`);
  return response.rows;
};

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

const createProduct = async (body) => {
  await client.query(`INSERT INTO products(name) VALUES($1)`, [body.name]);
  return {
    name: body.name,
  };
};

const createUser = async (body) => {
  await client.query(`INSERT INTO users(username, password) VALUES($1, $2)`, [
    body.username,
    body.password,
  ]);
  return {
    name: body.username,
    password: body.password,
  };
};

const createFavorite = async (body) => {
  await client.query(
    `INSERT INTO favorites(product_id, user_id) VALUES($1, $2)`,
    [body.product_id, body.user_id]
  );
  return {
    product_id: body.product_id,
    user_id: body.user_id,
  };
};

// NEED TO UPDATE USER PULL TO ALSO PULL IN FAVORITES, AND THEN FROM THERE DELETE FAVS FROM USER LIST

const deleteFavorite = async (user_id, body) => {
  await client.query(`DELETE from `);
};

module.exports = {
  client,
  fetchUsers,
  fetchProducts,
  fetchFavorites,
  createProduct,
  createUser,
  createFavorite,
  fetchAllFavorites,
}; //you forgot to export the client
