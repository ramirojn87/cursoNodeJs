module.exports = {

    list: async (req, res) => {
        try {
            console.log('list en especialidad')
            res.json({'mensaje': 'list en especialidad'});
        } catch (e) {
            console.log(e);
        }
    },
    
    get: async (req, res) => {
        try {
            console.log('get en especialidad, id: ' + req.params.id)
            res.json({'mensaje': 'get en especialidad, id: ' + req.params.id});
        } catch (e) {
            console.log(e);
        }
    },

    add: async (req, res) => {
        try {
            console.log('add en especialidad, nombre: ' + req.body.nombre)
            res.json({'mensaje': 'add en especialidad, nombre: ' + req.body.nombre});
        } catch (e) {
            console.log(e);
        }
    }

}