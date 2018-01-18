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
const request = require("request-promise");
const responses_1 = require("../utils/responses");
const random_1 = require("../utils/random");
const memesEndpoint = 'https://9gag.com/v1/group-posts/group/default/type/hot';
exports.getRandomMemes = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let responseMemes = null;
    let cursor = null;
    for (let i = 0; i < 5; i++) {
        const json = yield request(responseMemes ? memesEndpoint + '?' + cursor : memesEndpoint);
        let parsed = JSON.parse(json);
        let response = parsed.data.posts.filter(post => post.type !== 'Article');
        if (!responseMemes) {
            responseMemes = response;
        }
        else {
            responseMemes = [...responseMemes, ...response];
        }
        cursor = parsed.data.nextCursor;
    }
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