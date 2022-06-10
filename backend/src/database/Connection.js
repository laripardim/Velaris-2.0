require('dotenv').config();
const {Sequelize} = require('sequelize');

const Usuario = require('../model/Usuario')
const Livro = require('../model/Livro')
const Comentario = require('../model/Comentario');
const Capitulo = require('../model/Capitulo');

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
    Capitulo.init(sequelize);
    

    Usuario.associate(sequelize.models);
    Livro.associate(sequelize.models);
    Comentario.associate(sequelize.models);
    Capitulo.associate(sequelize.models);

    sequelize.sync({force: false})
}

module.exports = {
    sync, sequelize
}
