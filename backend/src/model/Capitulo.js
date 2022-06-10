const { Model, DataTypes } = require('sequelize');

class Capitulo extends Model {
    static init(datacon) {
        super.init(
            {
                texto: {
                    type: DataTypes.TEXT,
                    allowNull: true,
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
                tableName: 'capitulos',
                modelName: 'capitulo',
            }
        );
    }

    static associate (models){
        // Comentario.hasMany(models.usuario, {foreignKey: 'id_usuario'})
        // Comentario.hasMany(models.livro, {foreignKey: 'id_livro'})
    }
}

module.exports = Capitulo;
