"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Meme_1 = require("../models/Meme");
const responses_1 = require("../utils/responses");
function vote(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const meme = yield Meme_1.default.findOneAndUpdate({ gagId: req.body.gagId }, {
            $set: req.body,
            $inc: { rating: 1 }
        }, { upsert: true });
        res.status(200).json(responses_1.successRes(meme));
    });
}
exports.vote = vote;
//# sourceMappingURL=vote.js.map