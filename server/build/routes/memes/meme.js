"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const memeRouter = express.Router();
const randomMem_1 = require("../../controllers/randomMem");
memeRouter.get('/selectionsMemems', randomMem_1.getMemes);
exports.default = memeRouter;
//# sourceMappingURL=meme.js.map