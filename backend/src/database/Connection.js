require('dotenv').config();
const {Sequelize} = require('sequelize');

const Usuario = require('../model/Usuario')
const Livro = require('../model/Livro')
const Comentario = require('../model/Comentario');
const Escrita = require('../model/Escrita');

const sequelize = new Sequelize('velaris','root','',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    Usuario.init(sequelize);
    Livro.init(sequelize);
    Comentario.init(sequelize);
    Escrita.init(sequelize);
    

    Usuario.associate(sequelize.models);
    Livro.associate(sequelize.models);
    Comentario.associate(sequelize.models);
    Escrita.associate(sequelize.models);

    sequelize.sync({force: false})
}

module.exports = {
    sync, sequelize
}
