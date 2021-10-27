module.exports = function (sequelize, DataTypes) {
    const DetailsArticle = sequelize.define('detailsarticle', {
        titre: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
             },
        designation: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },

        totalht: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        prixht: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        periodeservice: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        quantitearticle: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        
        },
        {
            schema: 'schemaeasyaoaccount',
        }
        );


    DetailsArticle.associate = function (models) { 
        DetailsArticle.belongsTo(models.article, {
            foreignKey: {
                allowNull: false
            }
        });

        DetailsArticle.belongsTo(models.service, {
            foreignKey: {
                allowNull: false
            }
        });

        DetailsArticle.belongsTo(models.tva, {
            foreignKey: {
                allowNull: false
            }
        });
        
    };
    
    


    return DetailsArticle;
};
