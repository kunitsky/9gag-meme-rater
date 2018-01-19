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
const memesEndpoint = 'https://9gag.com/v1/group-posts/group/default/type/hot';
function mems(count) {
    return __awaiter(this, void 0, void 0, function* () {
        let responseMemes = null;
        let cursor = null;
        for (let i = 0; i < count; i++) {
            const json = yield request(responseMemes ? memesEndpoint + '?' + cursor : memesEndpoint);
            let parsed = JSON.parse(json).data;
            let response = parsed.posts.filter(post => post.type !== 'Article');
            if (!responseMemes) {
                responseMemes = response;
            }
            else {
                responseMemes = [...responseMemes, ...response];
            }
            cursor = parsed.nextCursor;
        }
        return responseMemes;
    });
}
exports.mems = mems;
//# sourceMappingURL=9gag.js.map