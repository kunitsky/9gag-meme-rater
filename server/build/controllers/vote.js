"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meme_1 = require("../models/Meme");
const responses_1 = require("../utils/responses");
function vote(req, res, next) {
    res.json(responses_1.successRes(Meme_1.default.findOneAndUpdate(req.body, { $inc: { 'rating': 1 } }, { upsert: true, setDefaultsOnInsert: true })));
}
exports.vote = vote;
//# sourceMappingURL=vote.js.map