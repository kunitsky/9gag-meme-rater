"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
const responses_1 = require("../utils/responses");
const randomizer_1 = require("../utils/randomizer");
const convertType_1 = require("../utils/convertType");
function getRandomMemes(req, res) {
    rp('https://9gag.com/v1/group-posts/group/default/type/new')
        .then((jsonStr) => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        let resp = JSON.parse(jsonStr);
        let numb1 = randomizer_1.getRandomNumbers().number1;
        let numb2 = randomizer_1.getRandomNumbers().number2;
        let object1 = {
            url: resp.data.posts[numb1].images.image700.url,
            id: resp.data.posts[numb1].id,
            type: convertType_1.convertType(resp.data.posts[numb1].type),
            title: resp.data.posts[numb1].title
        };
        let object2 = {
            url: resp.data.posts[numb2].images.image700.url,
            id: resp.data.posts[numb2].id,
            type: convertType_1.convertType(resp.data.posts[numb2].type),
            title: resp.data.posts[numb2].title
        };
        res.status(200).json(responses_1.successRes({ data: [object1, object2] }));
    });
}
exports.getRandomMemes = getRandomMemes;
//# sourceMappingURL=randomMem.js.map