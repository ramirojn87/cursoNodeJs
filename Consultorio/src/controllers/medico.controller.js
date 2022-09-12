module.exports = {

    list: async (req, res) => {
        try {
            console.log('list en medico')
            res.json({'mensaje': 'list en medico'});
        } catch (e) {
            console.log(e);
        }
    },
    
    get: async (req, res) => {
        try {
            console.log('get en medico, id: ' + req.params.id)
            res.json({'mensaje': 'get en medico, id: ' + req.params.id});
        } catch (e) {
            console.log(e);
        }
    },

    add: async (req, res) => {
        try {
            console.log('add en medico')
            res.json({'mensaje': 'add en medico, nombre: '+req.body.nombre});
        } catch (e) {
            console.log(e);
        }
    }

}