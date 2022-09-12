const router = require("express").Router(); // importar express.Router()

const controller = require('../controllers/especialidad.controller');

router.get('/', controller.list);
router.post('/', controller.add);
router.get('/:id', controller.get);

module.exports = router;