require('dotenv').config();
const {Sequelize} = require('sequelize');

const Usuario = require('../model/Usuario')
const Perfil = require('../model/Perfil')
const Follow = require('../model/Follow')
const Atendente = require('../model/Atendente')
const Livro = require('../model/Livro')
const Leitura = require('../model/Leitura')

const sequelize = new Sequelize('velaris','root','',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    Atendente.init(sequelize);
    Leitura.init(sequelize);
    Usuario.init(sequelize);
    Perfil.init(sequelize);
    Follow.init(sequelize);
    Livro.init(sequelize);
    
    Atendente.associate(sequelize.models);
    Leitura.associate(sequelize.models);
    Usuario.associate(sequelize.models);
    Perfil.associate(sequelize.models);
    Follow.associate(sequelize.models);
    Livro.associate(sequelize.models);
    

    sequelize.sync({force: false})
}

module.exports = {
    sync, sequelize
}
