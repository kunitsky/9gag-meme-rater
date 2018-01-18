"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successRes = (data, message) => ({
    success: true, data, message
});
exports.failRes = (message) => ({
    success: false, message, data: undefined
});
//# sourceMappingURL=responses.js.map