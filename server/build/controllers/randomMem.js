"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gagScraper = require("9gag-scraper");
const responses_1 = require("../utils/responses");
function getMemes(req, res) {
    new gagScraper('fresh').getGags((errors, data) => {
        res.status(200).json(responses_1.successRes({
            data: data.count
        }));
    });
}
exports.getMemes = getMemes;
//# sourceMappingURL=randomMem.js.map