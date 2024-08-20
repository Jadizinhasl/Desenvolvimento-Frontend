const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nome: { type: String, require: true},
    email: { type: String, require: true},
    senha: { type: String, require: true}
})

const user = mongoose.model('usuarios', userSchema)
module.exports = user