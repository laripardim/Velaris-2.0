const { Model, DataTypes } = require('sequelize');

class Atendente extends Model {
    static init(datacon) {
        super.init(
            {
                nome_atendente: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                email:{
                    type: DataTypes.STRING(30),
                    allowNull: false,

                },

                senha: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },
                
                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'usuarios',
                        key: 'id',
                    }
                }

            },
            {
                sequelize: datacon,
                tableName: 'atendentes',
                modelName: 'atendente',
            }
        );
    }

    static associate (models){
        Atendente.hasMany(models.perfil, {foreignKey: 'id_atendente'});
        Atendente.belongsTo(models.usuario, {foreignKey: 'id_usuario'});
    }
}

module.exports = Atendente;
