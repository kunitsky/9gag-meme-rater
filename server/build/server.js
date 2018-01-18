"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes = require("./routes");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')));
app.use(routes);
exports.default = app;
//# sourceMappingURL=server.js.map