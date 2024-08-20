const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const stringConexao = "mongodb+srv://jadi:1tB8yrDhbkng8BrO@bandodedados.mhequ.mongodb.net/"
const Usuario = require('./models/user')

app.get('/', async (req, res) => {
    try {
        let usuarios = await Usuario.find()
        return res.status(200).json({users: usuarios})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error})
    }
})

app.post('cadastrar-usuario', async (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }

        await Usuario.create(usuario)

        return res.status(201).json({ message: "Cadastro realizado"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno no servidor"})
    }
})


mongoose.connect(stringConexao, {
    dbName: "BandoDeDados"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log("Falha ao se conectar com mongoDB")
    console.log(error)
})