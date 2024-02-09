const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// se encoded for disparado ele transforma o body da requisição em obj 
app.use(bodyParser.urlencoded({extended : true}))

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
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
}) 

// Alterar Produto
app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvaProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
}) 

// Excluir produto
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
}) 

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})