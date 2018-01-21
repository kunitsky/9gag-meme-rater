"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MemeSchema = new Schema({
    gagId: String,
    contentUrl: String,
    title: String,
    rating: {
        type: Number,
        default: 1
    },
    type: {
        type: String,
        enum: ['Video', 'Photo', 'Animated']
    }
});
exports.default = mongoose.model('Meme', MemeSchema, 'memes');
//# sourceMappingURL=Meme.js.map