let conteudoDiv = document.getElementById('conteudo')

fetch('http://localhost:5000', {
    method: "GET"
})
    .then(resposta => resposta.json())
    .then(produto =>     {
        for (produto of produtos) {
            let paragrafo = document.createElement('p')
            paragrafo.textContent = produto.nome
            conteudoDiv.appendChild(paragrafo)

            let valor = document.createElement('span')
            valor.textContent = produto.valor
            conteudoDiv.appendChild(valor)
        }
    })