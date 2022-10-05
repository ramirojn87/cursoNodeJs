const { Router } = require("express");

const decodeJWT = require("../middlewares/decodeJWT");

const pacienteRoutes = require("./hospital.routes");
const medicoRoutes = require("./medico.routes");
const especialidadRoutes = require("./especialidad.routes");

const authRoutes = require("./auth.routes");

const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router(); // crear una instancia de express.Router()
  router.use("/hospital", decodeJWT, pacienteRoutes);
  router.use("/medico", decodeJWT, medicoRoutes);
  router.use("/especialidad", decodeJWT, especialidadRoutes);
  return router; // retornar el router
};

const rutas_auth = () => { // aca se ponen todas las rutas que existen
  const router = Router(); // crear una instancia de express.Router()
  router.use("/auth", authRoutes);
  return router; // retornar el router
};

module.exports = { rutas_init, rutas_auth } // exportar los archivos de rutas de la api