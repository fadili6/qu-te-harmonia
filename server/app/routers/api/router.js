const express = require('express');

const router = express.Router();

// Autres importations de routeurs
const programsRouter = require('./programs/router');

// Utilise le routeur des programs
router.use('/programs', programsRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

module.exports = router;



