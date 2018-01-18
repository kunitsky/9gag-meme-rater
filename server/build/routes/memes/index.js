"use strict";
const express = require("express");
const memeRouter = express.Router();
const memesRating_1 = require("../../controllers/memesRating");
const vote_1 = require("../../controllers/vote");
const randomMeme_1 = require("../../controllers/randomMeme");
memeRouter.get('/selection', randomMeme_1.getRandomMemes);
memeRouter.get('/rating', memesRating_1.memesRating);
memeRouter.post('/vote', vote_1.vote);
module.exports = memeRouter;
//# sourceMappingURL=index.js.map