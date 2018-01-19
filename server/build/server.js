"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes = require("./routes/index");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
exports.default = app;
//# sourceMappingURL=server.js.map