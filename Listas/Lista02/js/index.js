const express = require('express')
const app = express()
const porta = 5000

let produtos = [
    {
        nome: "Grand theft auto v",
        valor: 348.99,
        descricao: "O melhor GTA de todos os tempos",
        imagem: "https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg",
    },
    {
        nome: "Red Dead Redempetion 2",
        valor: 240.99,
        descricao: "Não tem como, o melhor jogo já criado. Amo amo dms",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffZ8YzorTgbviqwWQxv1w8XFXSPeiNc4lBQ&s"
    }
]

app.get('/', (requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    } catch (error) {
        return resposta.json({message: "Não é possível"}).status(400)
    }
})

app.get('/produtos', (req, res) => {
    return res.json({ nome: "GTA", valor: 348.99, descricao: "bacaninha", img: "https://play-lh.googleusercontent.com/sGWPLbsfIfMuCj_NyF5m2Nu5LEudg7NNekleFSG0A7sOQaBVjZepWfmNkHpl-ca4ChA=w526-h296-rw" }).status(200)
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})