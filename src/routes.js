import { Router } from 'express';
import PessoaController from './app/controllers/PessoaController';

const routes = new Router();

routes.get('/pessoas', PessoaController.index);
routes.post('/pessoas', PessoaController.store);
routes.put('/pessoas/:id', PessoaController.update);
routes.delete('/pessoas/:id', PessoaController.delete);

export default routes;