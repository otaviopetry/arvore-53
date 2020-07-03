const express = require('express');
const { Router } = require('express');

const routes = express.Router();

routes.get( '/', (request, response) => {
    response.send({ message: 'Hello Desafio Árvore!' });
})

routes.get( '/quiz', (request, response) => {
    response.send({ message: 'Página do quiz inicial' }); 
})

routes.get('/library', (request, response) => {
    response.send({ message: 'Página inicial da plataforma' });
})

routes.get( '/profile', (request, response) => {
    response.send({ message: 'Página de perfil' });
})

routes.get( '/achievements', (request, response) => {
    response.send({ message: 'Página de conquistas' });
})

routes.get( '/bookshelf', (request, response) => {
    response.send({ message: 'Página da estante' });
})

routes.get( '/book', (request, response) => {
    response.send({ message: 'Página do livro' });
})

module.exports = routes;