// endpoint -> caso de uso -> modelo

const Koders = require('../models/koders')

function getAll(){
 return Koders.find({})
}

function createKoder(name, lastName, age, gender){
    return Koders.create({ name, lastName, age, gender })
}

function deleteKoder(idKoder){
    return Koders.findByIdAndDelete(idKoder)
}

module.exports = {
    getAll,
    createKoder,
    deleteKoder
}