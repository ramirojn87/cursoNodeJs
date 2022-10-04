const { Router } = require("express");

const pacienteRoutes = require("./hospital.routes");
const medicoRoutes = require("./medico.routes");
const especialidadRoutes = require("./especialidad.routes");

const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router(); // crear una instancia de express.Router()
  router.use("/hospital", pacienteRoutes);
  router.use("/medico", medicoRoutes);
  router.use("/especialidad", especialidadRoutes);
  return router; // retornar el router
};

module.exports = { rutas_init } // exportar el archivo de rutas de la api