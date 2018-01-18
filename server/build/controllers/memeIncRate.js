"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meme_1 = require("../models/Meme");
const responses_1 = require("../utils/responses");
function memeIncRating(req, res, next) {
    res.json(responses_1.successRes(Meme_1.default.findById(req.query.id, (err, meme) => {
        if (err) {
            res.json({ success: false, message: err });
        }
        meme.rating++;
        meme.save((err, updated) => {
            if (err) {
                res.json({ success: false, message: err });
            }
            res.json(responses_1.successRes({ updated }));
        });
    })));
}
exports.memeIncRating = memeIncRating;
//# sourceMappingURL=memeIncRate.js.map