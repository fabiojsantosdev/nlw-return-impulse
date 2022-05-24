//GET    = Buscar informações
//POST   = Cadastrar informações
//put    = Atualizar informações de uma entidade
//PATCH  = Atualizar informação unica
//DELETE = Deletar informação

import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});
