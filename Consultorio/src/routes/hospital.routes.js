const router = require("express").Router(); // importar express.Router()
const controller = require('../controllers/hospital.controller') // importar el archivo de controladores
const validate = require('../middlewares/validate')
const scheme = require('../middlewares/schemes/hospital.scheme')

router.get('/', controller.list)
router.post('/', validate(scheme.add), controller.add)
router.get('/:id', controller.get)

module.exports = router;