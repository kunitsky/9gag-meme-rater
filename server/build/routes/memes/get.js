"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const memeFromDb_1 = require("../../controllers/memeFromDb");
const memesRating_1 = require("../../controllers/memesRating");
const getRouter = express.Router();
getRouter.get('/random', memeFromDb_1.memeFromDb);
getRouter.get('/rating', memesRating_1.memesRating);
exports.default = getRouter;
//# sourceMappingURL=get.js.map