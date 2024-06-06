const { client } = require("./index");

const fetchProducts = async () => {
  const response = await client.query(`SELECT * FROM products ORDER BY id ASC`);
  return response.rows;
};

const createProduct = async (body) => {
  await client.query(`INSERT INTO products(name) VALUES($1)`, [body.name]);
  return {
    name: body.name,
  };
};

module.exports = {
  fetchProducts,
  createProduct,
};
