/* eslint-disable import/extensions */
const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
// eslint-disable-next-line import/no-unresolved
const { browse, read, add } = require("../../../app/controllers/itemActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
