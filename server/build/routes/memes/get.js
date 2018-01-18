"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const getRouter = express.Router();
getRouter.get('/random', (req, res) => {
    res.json(successRes(MemeModel.find()));
});
exports.default = getRouter;
//# sourceMappingURL=get.js.map