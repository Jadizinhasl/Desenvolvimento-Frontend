const express = require('express')
const app = express()
const port = 5020

let database = []

database.push

// a rota(endpoint) barra mostra os produtos principais 
app.get('/', (req, res) => {
    try {
        return res.status(200).json({ produtos: database})
    } catch (error) {
        return res.status(500).json({ messagem: "Erro! aguarade alguns minutos"})
    }
})

app.get('/buscar-produto-por-id', (req, res) => {
    try {
        let produtoId = req.query.id
        let produto = database.find(produto => produto.id == produtoId)
        if (produto == undefined) {
            return res.status(404).json({ message: "Produto não encontrado"})
        }
        console.log(produto)

        return res.status(200).json({ produtos: database})
    } catch (error) {
        return res.status(500).json({ messagem: "Erro! aguarade alguns minutos"})
    }
})

app.post('/adicionar-produto', (req, res) => {
    try {
        let produto = {
            id: req.body.id,
            nome: req.body.nome,
            valor: req.body.valor,
            descricao: req.body.descricao
        }

        database.push(produto)

        return res.status(201).json({ messagem: 'Produto adicionado com sucesso!'})
    } catch (error) {
        return res.status(500).json({ messagem: error})
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})