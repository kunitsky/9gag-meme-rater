"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let disposerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    image: String,
    price: Number,
    specs: {
        model: String,
        steps: String,
        reverse: String,
        booster: String,
        isolation: String,
        power: String,
        room: String,
        material: String,
        mass: String
    },
    additionalImages: [String],
    features: [String],
    equipment: [String]
});
const Disposer = mongoose.model('Disposer', disposerSchema, 'disposers');
exports.default = Disposer;
//# sourceMappingURL=Disposer.js.map