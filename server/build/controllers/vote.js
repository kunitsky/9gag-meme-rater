"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meme_1 = require("../models/Meme");
const responses_1 = require("../utils/responses");
function vote(req, res, next) {
    console.log(req.body);
    const meme = Meme_1.default.findByIdAndUpdate(req.body.id, Object.assign({ $inc: { 'rating': 1 } }, req.body), { upsert: true });
    res.status(200).json(responses_1.successRes(meme));
}
exports.vote = vote;
//# sourceMappingURL=vote.js.map