const express = require("express");
const router = express.Router();

const { validatorCreateItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const { createItem } = require("../controllers/tracks"); // Falta la importación de createItem

router.post("/", validatorCreateItem, customHeader, createItem);
router.post("/", validatorCreateItem, createItem);

module.exports = router;
