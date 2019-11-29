// Importando express
const express = require('express');
const express = require('./routes');

// Definindo classe do App
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // Recebendo requisições em formato Json
  middlewares() {
    this.server.use(express.json());
  }

  // Importando as rotas do arquivo ./routes
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;