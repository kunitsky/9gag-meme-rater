"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meme_1 = require("../models/Meme");
const responses_1 = require("../utils/responses");
const memesPerPage = 10;
function memesRating(req, res, next) {
    const page = req.query.page || 0;
    res.json(responses_1.successRes(Meme_1.default.find().sort('rating').skip(page * memesPerPage).limit(memesPerPage)));
}
exports.memesRating = memesRating;
//# sourceMappingURL=memesRating.js.map