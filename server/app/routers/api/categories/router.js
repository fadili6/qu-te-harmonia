const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const {
  browse,
  read,
  getCategories,
} = require("../../../controllers/categoryActions");

// Route to get a list of items
router.get("/", browse);

router.get("/categories", getCategories);

router.get("/:id", read);


/* ************************************************************************* */

module.exports = router;
