module.exports = {

    list: async (req, res) => {
        try {
            console.log('list en paciente')
            res.json({"mensaje": "list en paciente"});
        } catch (e) {
            console.log(e);
        }
    },
    
    get: async (req, res) => {
        try {
            console.log('get en paciente, id: ' + req.params.id)
            res.json({"mensaje": "get en paciente, id: " + req.params.id});
        } catch (e) {
            console.log(e);
        }
    },

    add: async (req, res) => {
        try {
            console.log('add en paciente, nombre: ' + req.body.nombre)
            res.json({"mensaje": "add en paciente, nombre: " + req.body.nombre});
        } catch (e) {
            console.log(e);
        }
    }

}