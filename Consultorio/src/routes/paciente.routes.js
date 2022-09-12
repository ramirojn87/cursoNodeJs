const router = require("express").Router(); // importar express.Router()
const controller = require('../controllers/paciente.controller') // importar el archivo de controladores de usuarios

router.get('/', controller.list)
router.post('/', controller.add)
router.get('/:id', controller.get)

module.exports = router;