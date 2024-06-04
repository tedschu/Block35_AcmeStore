const express = require("express");
const path = require("path");
const { client } = require("../db/index.js");

const app = express();
app.use(express.json());
client.connect();

const baseQuery = `/api/`;

app.get(baseQuery, (req, res) => [
  res.json({
    success: true,
  }),
]);

app.use(baseQuery + "users", require("../users"));
app.use(baseQuery + "products", require("../products"));
app.use(baseQuery + "favorites", require("../favorites"));

app.listen(8080, () => {
  console.log("App is running at port 8080");
});
