"use strict";
const express = require("express");
const memeRouter = require("./memes/index");
// routes imports
const router = express.Router();
// when u wanna add new controller, do this like:
// router.use('/path', controller)
router.use('/api/v1/memes', memeRouter);
module.exports = router;
//# sourceMappingURL=index.js.map