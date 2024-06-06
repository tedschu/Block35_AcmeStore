const { param } = require("../users");
const { client } = require("./index");

const fetchUsers = async () => {
  const response = await client.query(
    `SELECT id, username FROM users ORDER BY id ASC`
  );
  return response.rows;
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

const fetchUserById = async (id) => {
  const response = await client.query(`SELECT * FROM users WHERE id = $1`, [
    id,
  ]);
  return response.rows[0];
};

const fetchFavoritesByUserId = async (params_id) => {
  const fav_response = await client.query(
    `SELECT * FROM favorites WHERE user_id=$1`,
    [params_id]
  );
  return {
    favorites: fav_response.rows,
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

const deleteFavoriteByUserId = async (id) => {
  await client.query(`DELETE FROM favorites WHERE id = $1`, [Number(id)]);
  return {
    id: id,
  };
};

module.exports = {
  fetchUsers,
  createUser,
  fetchUserById,
  fetchFavoritesByUserId,
  createFavorite,
  deleteFavoriteByUserId,
};
