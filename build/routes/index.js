"use strict";
const express = require("express");
const memeRouter = require("./memes/index");
const client_1 = require("../controllers/client");
const router = express.Router();
router.use('/api/v1/memes', memeRouter);
router.get('*', client_1.client);
module.exports = router;
//# sourceMappingURL=index.js.map