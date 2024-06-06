const { client } = require("./index");

module.exports = {};

// const getFavoritesByUserId = async (params_id) => {
//   const fav_response = await client.query(
//     `SELECT * FROM favorites WHERE user_id = $1`,
//     [params_id]
//   );
//   return {
//     favorites: fav_response.rows,
//   };
// };
