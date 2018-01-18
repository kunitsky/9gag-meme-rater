"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MemeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    url: String,
    rating: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        enum: ['Video', 'Photo', 'Animated']
    }
});
exports.default = mongoose.model('Meme', MemeSchema, 'meme');
//# sourceMappingURL=Meme.js.map