import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// -- METÓDOS -- //
// GET: BUSCAR OU LISTAR UMA INFORMAÇÃO
// POST: CRIAR ALGUMA NOVA INFORMAÇÃO
// PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE
// DELETE: DELETAR UMA INFORMAÇÃO EXISTENTE

// CORPO (REQUEST BODY): DADOS PARA UMA CRIAÇÃO OU ATUALIZAÇÃO DE UM REGISTRO
// ROUTE PARAMS: IDENTIFICAR QUAL RECURSO EU QUERO ATUALIZAR OU DELETAR
//QUERY PARAMS: PAGINAÇÃO, FILTROS, ORDENAÇÃO

app.listen(3333);
