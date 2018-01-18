"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// routes imports
const router = express.Router();
const apiRouter = express.Router();
// when u wanna add new controller, do this like:
// router.use('/path', controller)
apiRouter.use('/api/v1', router);
apiRouter.get('*', (req, res) => res.send('Hello world!'));
// apiRouter.get('*', (req, res) => res.sendFile('/index.html'))
exports.default = apiRouter;
//# sourceMappingURL=index.js.map