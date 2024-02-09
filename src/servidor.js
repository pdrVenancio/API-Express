const porta = 3003

const express = require('express')
const app = express()

const bancoDeDados =require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    //converter para json
    res.send(bancoDeDados.getProdutos())
})

// Pesquisar produto por id
app.get('/produtos/:id', (req, res, next) => {
    // req.params. para acessar os parametros( :id, ...)
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Salvar produtos
app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvaProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})