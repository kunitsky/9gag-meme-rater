"use strict";
const express = require("express");
const memeRouter = require("./memes/index");
// routes imports
const router = express.Router();
const apiRouter = express.Router();
// when u wanna add new controller, do this like:
// router.use('/path', controller)
apiRouter.use('/api/v1', router);
router.use('/memes', memeRouter);
apiRouter.get('*', (req, res) => res.send('Hello world!'));
module.exports = apiRouter;
//# sourceMappingURL=index.js.map