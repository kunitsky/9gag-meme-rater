"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meme_1 = require("../models/Meme");
const responses_1 = require("../utils/responses");
function memeFromDb(req, res, next) {
    Meme_1.default.count({}).exec((err, count) => {
        if (err) {
            res.json({ success: false, message: err });
        }
        const random = Math.floor(Math.random() * count);
        Meme_1.default.findOne().skip(random).exec((err, result) => {
            if (err) {
                res.json({ success: false, message: err });
            }
            res.json(responses_1.successRes({ result }));
        });
    });
}
exports.memeFromDb = memeFromDb;
//# sourceMappingURL=memeFromDb.js.map