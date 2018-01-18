"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MemeType_1 = require("./MemeType");
const MemeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    url: String,
    rating: Number,
    type: MemeType_1.MemeType
});
exports.default = mongoose.model('Meme', MemeSchema, 'meme');
//# sourceMappingURL=Meme.js.map