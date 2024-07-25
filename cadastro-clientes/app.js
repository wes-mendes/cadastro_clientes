const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientesController = require('./controllers/clientesController');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/clientes', clientesController.listarClientes);
app.get('/clientes/adicionar', (req, res) => res.render('adicionar'));
app.post('/clientes/adicionar', clientesController.adicionarCliente);
app.get('/clientes/:id', clientesController.exibirCliente);
app.post('/clientes/:id/editar', clientesController.atualizarCliente);
app.post('/clientes/:id/deletar', clientesController.deletarCliente);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.');
});