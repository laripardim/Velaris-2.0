const express = require('express');

const route = express.Router();

const ctrUsuario = require('./src/ctr/ctrUsuario');
const ctrLivro = require('./src/ctr/ctrLivro');
const ctrComentario = require('./src/ctr/ctrComentario');
const ctrCapitulo = require('./src/ctr/ctrCapitulo.js');

route.post('/login', ctrUsuario.login)

route.post('/usuario', ctrUsuario.create);
route.get('/usuario', ctrUsuario.read);
route.get('/usuario/:id', ctrUsuario.read);
route.put('/usuario/:id', ctrUsuario.update);
route.delete('/usuario/:id', ctrUsuario.del);

route.post('/livro', ctrLivro.create);
route.get('/livro', ctrLivro.read);
route.get('/livro/:id', ctrLivro.read);
route.post('/livro/busca', ctrLivro.readbusca);
route.put('/livro/:id', ctrLivro.update);
route.delete('/livro/:id', ctrLivro.del);


route.post('/comentario', ctrComentario.create);
route.get('/comentario', ctrComentario.read);
route.get('/comentario/:id', ctrComentario.read);
route.put('/comentario/:id', ctrComentario.update);
route.delete('/comentario/:id', ctrComentario.del);


route.post('/capitulo', ctrCapitulo.create);
route.get('/capitulo', ctrCapitulo.read);
route.get('/capitulo/:id', ctrCapitulo.readCapitulo);
route.put('/capitulo/:id', ctrCapitulo.update);
route.delete('/capitulo/:id', ctrCapitulo.del);
route.get('/capitulo/:id_livro/:id', ctrCapitulo.read);



module.exports = route;



