const {Model, DataTypes} = require('sequelize');

class Perfil extends Model{
    static init (dataCon){
        super.init(
            {

                comentario: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'usuarios',
                        key: 'id',
                    }
                },
                
                id_atendente: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'atendentes',
                        key: 'id',
                    }
                },
                id_livro: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'livros',
                        key: 'id',
                    }
                },

            },
            {
                sequelize: dataCon,
                tableName: 'perfis',
                modelName: 'perfil',
            }
        );
    }
    static associate(models){
        Perfil.belongsTo(models.usuario, {foreignKey: 'id_usuario'});
        Perfil.belongsTo(models.atendente, {foreignKey: 'id_atendente'});
        Perfil.belongsTo(models.livro, {foreignKey: 'id_livro'});
    }
}

module.exports = Perfil;