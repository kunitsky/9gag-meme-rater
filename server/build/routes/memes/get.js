"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const memeFromDb_1 = require("../../controllers/memeFromDb");
const memesRating_1 = require("../../controllers/memesRating");
const vote_1 = require("../../controllers/vote");
const memeRouter = express.Router();
memeRouter.get('/random', memeFromDb_1.memeFromDb);
memeRouter.get('/rating', memesRating_1.memesRating);
memeRouter.get('/vote', vote_1.vote);
exports.default = memeRouter;
//# sourceMappingURL=get.js.map