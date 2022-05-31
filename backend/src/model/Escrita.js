const { Model, DataTypes } = require('sequelize');

class Escrita extends Model {
    static init(datacon) {
        super.init(
            {
                texto: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                id_livro: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                

                // id_usuario: {
                //     type: DataTypes.INTEGER,
                //     allowNull: false,
                //     references: {
                //         model: 'usuario',
                //         key: 'id',
                //     }
                // }
            },
            {
                sequelize: datacon, 
                tableName: 'escritas',
                modelName: 'escrita',
            }
        );
    }

    static associate (models){
        // Comentario.hasMany(models.usuario, {foreignKey: 'id_usuario'})
        // Comentario.hasMany(models.livro, {foreignKey: 'id_livro'})
    }
}

module.exports = Escrita;
