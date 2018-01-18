"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertType(type) {
    if (type === 'Photo' || type === 'Animated') {
        type = 'IMAGE';
    }
    else if (type === 'Video') {
        type = 'VIDEO';
    }
    return type;
}
exports.convertType = convertType;
//# sourceMappingURL=convertType.js.map