const { response } = require("express");

for (let i = 0; i < 100; i++) {
     
    fetch('http://localhost:5020/adicionar-produto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: i,
            nome: 'Bolu de morangu',
            descricao: "Hmmm bolu de morangu!!!",
            valor: 100
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erro ao fazer a requisição POST:', error);
    })
}