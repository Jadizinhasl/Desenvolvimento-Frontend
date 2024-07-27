let conteudoDiv = document.getElementById('conteudo')

fetch('http://localhost:5000', {
    
})
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))