fetch('http://localhost:5020/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(responde => {
    if (!response.ok) {
        throw new Error('Erro na requisição GET');
    }
    return response.json();
})
.then(data => {
    console.log('Produtos recebidos:', data.produtos);
})
.catch(error => {
    console.error('Erro ao fazer a requisição GET:', error);
})