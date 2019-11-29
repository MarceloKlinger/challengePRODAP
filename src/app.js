// Importando express
import express from 'express';
import routes from './routes';

import './database';

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

export default new App().server;