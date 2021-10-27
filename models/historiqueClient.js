module.exports = function (sequelize, DataTypes) {
    const HistoriqueClient = sequelize.define('historiqueclient', {
        typeproduitacheter : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        achatoudepense: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        datehistorique:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        
        datedebutabon:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        datefinabon:{
            type: DataTypes.DATE,
            allowNull: false,
        },
      
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );
    HistoriqueClient.associate = function (models) { 
        HistoriqueClient.belongsTo(models.client, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return HistoriqueClient;
};