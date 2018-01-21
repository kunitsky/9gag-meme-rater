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
const memesPerPage = 10;
function memesRating(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = ~~req.query.cursor || 0;
        const pagesCount = (yield Meme_1.default.find().count()) / memesPerPage;
        let cursor = page >= 0 && page < pagesCount - 1 ? page + 1 : null;
        if (page <= pagesCount - 1 || page >= 0) {
            const memes = yield Meme_1.default.find().sort([['rating', -1]]).skip(page * memesPerPage).limit(memesPerPage);
            res.json(responses_1.successRes({ memes, cursor }));
        }
        else {
            res.json({ cursor });
        }
    });
}
exports.memesRating = memesRating;
//# sourceMappingURL=memesRating.js.map