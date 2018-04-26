const router = require('express').Router();
const controller = require('./people_controller');

router.get('/list', controller.list);
// router.post('/create', controller.create);

module.exports = router;