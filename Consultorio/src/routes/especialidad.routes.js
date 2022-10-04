const router = require("express").Router(); // importar express.Router()

const controller = require('../controllers/especialidad.controller')
const validate = require('../middlewares/validate')
const scheme = require('../middlewares/schemes/especialidad.scheme')

router.get('/', controller.list);
router.post('/', validate(scheme.add), controller.add);
router.get('/:id', controller.get);

module.exports = router;