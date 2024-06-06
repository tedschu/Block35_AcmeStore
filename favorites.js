const express = require("express");
const router = express.Router();
const {
  fetchFavorites,
  fetchAllFavorites,
  createFavorite,
} = require("./db/favorites");

//get all favorites
router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchAllFavorites());
  } catch (err) {
    next(err);
  }
});

router.get("/:user_id", async (req, res, next) => {
  try {
    res.send(await fetchFavorites(req.params.user_id));
  } catch (err) {
    next(err);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     res.send(await createFavorite(req.body));
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
