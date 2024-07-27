const http = require('http')
const port = 5000

const produtos = [
    { nome: 'Bolo de morango', valor: 1000, imagem: 'https://img.cybercook.com.br/receitas/12/bolo-de-morango-3.jpeg'},
    { nome: 'Bolo de chocolate', valor: 3050, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnZYRrzdjh8SL2znlxsamM4xyPRmXcWgM3g&s'}
]
const requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.write(JSON.stringify(produtos))
    return res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
    console.log('Servidor rodando na porta 5000')
})