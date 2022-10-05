const router = require("express").Router(); // importar express.Router()

const controller = require('../controllers/auth.controller')
const controllerMedico = require('../controllers/medico.controller')
const validate = require('../middlewares/validate')
const scheme = require('../middlewares/schemes/auth.scheme')

router.post('/login', validate(scheme.login), controller.login);
router.post('/register', controllerMedico.add);

module.exports = router;