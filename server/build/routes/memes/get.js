"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const memeFromDb_1 = require("../../controllers/memeFromDb");
const memesRating_1 = require("../../controllers/memesRating");
const memeIncRate_1 = require("../../controllers/memeIncRate");
const getRouter = express.Router();
getRouter.get('/random', memeFromDb_1.memeFromDb);
getRouter.get('/rating', memesRating_1.memesRating);
getRouter.get('/inc_rating', memeIncRate_1.memeIncRating);
exports.default = getRouter;
//# sourceMappingURL=get.js.map