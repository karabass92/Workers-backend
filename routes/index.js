const Roter = require('express');
const router = new Roter();
const workerRouter = require('./workerRouter');


router.use('/worker', workerRouter)


module.exports = router;