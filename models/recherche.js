module.exports = function (sequelize, DataTypes) {
    const Recherche = sequelize.define('recherche', {
        nomrecherche: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        criteresrecherche: {
                type: DataTypes.JSON ,
                allowNull: false,
            }
        },
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

    Recherche.associate = function (models) { 
        Recherche.belongsTo(models.client, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recherche;
};
