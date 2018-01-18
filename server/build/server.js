"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')));
app.use(routes_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map