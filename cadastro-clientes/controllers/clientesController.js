const connection = require('../models/cliente');

exports.listarClientes = (req, res) => {
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
        res.render('listar', { clientes: results });
    });
};

exports.adicionarCliente = (req, res) => {
    const { nome, email, telefone } = req.body;
    connection.query('INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone], (err) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
};

exports.exibirCliente = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM clientes WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.render('editar', { cliente: results[0] });
    });
};

exports.atualizarCliente = (req, res) => {
    const { id, nome, email, telefone } = req.body;
    connection.query('UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id], (err) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
};

exports.deletarCliente = (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM clientes WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
};