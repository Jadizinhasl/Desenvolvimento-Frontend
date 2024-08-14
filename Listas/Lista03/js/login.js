const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

let database = []

app.post('/cadastrar-usuario', (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha
        }

        let verificandoEmail = database.find(cadastro => cadastro.email === usuario.email)
        if (!verificandoEmail) {
            if(usuario.senha !== usuario.confirmacaoSenha){
                return res.status(400).json({msg: "As senhas devem ser iguais"})
            }
        } else {
            return res.status(400).json({msg: "Email já está sendo utilizado"})
        }

        database.push(usuario)

        return res.status(201).json({msg: "Cadastro realizado com sucesso"})
    } catch (error) {
        return res.status(500).json({ messagem: error})
    }
})

app.post('/login', (req, res) => {
    try {
        let login = {
            email: req.body.email,
            senha: req.body.senha
        }

        let emailEncontrado = database.find(emailLogin => emailLogin.email === login.email)
        if (!emailEncontrado || login.senha !== emailEncontrado.senha) {
            return res.status(400).json({ msg: "Usúario ou senha invalida"})
        }

        return res.status(200).json({msg : "Login realizado com sucesso"})
    } catch (error) {
        return res.status(500).json({ messagem: error})
    }
})

app.get('/buscar-usuarios', (req, res) => {
    try {
        return res.status(200).json(database)
    } catch (error) {
        return res.status(500).json({ messagem: "Erro! recarregue a pagina" })
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})