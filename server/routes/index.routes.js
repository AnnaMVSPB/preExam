const express = require('express');

const router = express.Router();

const flowersApiRouter = require('./api/flower.routes');

router.use('/api/flowers', flowersApiRouter);

module.exports = router;
