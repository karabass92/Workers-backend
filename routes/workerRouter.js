const Roter = require('express');
const router = new Roter();
const workerController = require('../controllers/workerController');


router.get('/', workerController.getAll);
router.get('/:id', workerController.getOne);
router.post('/', workerController.create);
router.put('/:id', workerController.update);
router.delete('/:id', workerController.delete);


module.exports = router;