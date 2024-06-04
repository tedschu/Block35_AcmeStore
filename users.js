const express = require("express");
const router = express.Router();
const { fetchUsers, createUser } = require("./db");

//get all users
router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchUsers());
  } catch (err) {
    next(err);
  }
});

//creates a user
router.post("/", async (req, res, next) => {
  try {
    res.send(await createUser(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
