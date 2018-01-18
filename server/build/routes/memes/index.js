"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const MemeRouter = express.Router();
const get_1 = require("./get");
MemeRouter.use('/', get_1.default);
exports.default = MemeRouter;
//# sourceMappingURL=index.js.map