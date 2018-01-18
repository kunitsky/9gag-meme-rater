"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise");
const responses_1 = require("../utils/responses");
const random_1 = require("../utils/random");
const memesEndpoint = 'https://9gag.com/v1/group-posts/group/default/type/hot';
exports.getRandomMemes = (req, res) => {
    request(memesEndpoint).then(json => {
        const responseMemes = JSON.parse(json).data.posts.filter(post => post.type !== 'Article');
        const indecies = random_1.getRandomNumbers(responseMemes.length);
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
};
//# sourceMappingURL=randomMeme.js.map