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
const responses_1 = require("../utils/responses");
const random_1 = require("../utils/random");
const cache = require("memory-cache");
const gag = require("../api/9gag");
const refreshTime = 300000;
const pagesCount = 10;
const fillCache = () => {
    gag.mems(pagesCount).then(memes => cache.put('memes', memes));
};
fillCache(); // init fill
setTimeout(fillCache, refreshTime);
exports.randomMemes = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // TODO: Add cache
    const responseMemes = cache.get('memes');
    const indecies = random_1.getRandomNumbers(responseMemes.length - 1);
    const data = indecies.map(index => {
        let url;
        let meme = responseMemes[index];
        switch (meme.type) {
            case 'Photo':
                url = meme.images.image700.url;
                break;
            case 'Animated':
                url = meme.images.image460svwm.url;
                break;
            case 'Video':
                url = `https://youtu.be/${meme.video.id}`;
                break;
        }
        return {
            type: meme.type,
            title: meme.title,
            id: meme.id,
            url
        };
    });
    res.status(200).json(responses_1.successRes(data));
});
//# sourceMappingURL=randomMeme.js.map