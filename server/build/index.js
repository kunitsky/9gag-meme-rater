"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const server_1 = require("./server");
dotenv.config();
// database
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to database successfully'));
// server
const port = parseInt(process.env.PORT, 10) || 3001;
server_1.default.listen(port, () => console.log(`Server is running on port: ${port}`));
//# sourceMappingURL=index.js.map