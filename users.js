// this is where the routes for the db go

const express = require("express");
const router = express.Router();
const {
  fetchUsers,
  createUser,
  fetchUserById,
  fetchFavoritesByUserId,
  createFavorite,
  deleteFavoriteByUserId,
} = require("./db/users");

//get all users
router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchUsers());
  } catch (err) {
    next(err);
  }
});

//gets a single user
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await fetchUserById(req.params.id));
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

// gets favorites for a user
router.get("/:id/favorites", async (req, res, next) => {
  try {
    res.send(await fetchFavoritesByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

//creates a favorite
router.post("/:userId/favorites", async (req, res, next) => {
  try {
    res.send(await createFavorite(req.body));
  } catch (error) {
    next(error);
  }
});

// deletes a favorite
router.delete("/:userId/favorites/:id", async (req, res, next) => {
  try {
    res.send(await deleteFavoriteByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
