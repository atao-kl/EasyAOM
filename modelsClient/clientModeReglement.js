module.exports = function (sequelize, DataTypes) {
    const ClientModeReglement = sequelize.define('ClientModeReglement', {
        deleteAt:{
            type: DataTypes.DATE,
            defaultValue: null,
        }
  });


    ClientModeReglement.associate = function (models) { 
        ClientModeReglement.belongsTo(models.Client, {
            foreignKey: {
                allowNull: false
            }
        });
        ClientModeReglement.belongsTo(models.ModeReglement, {
            foreignKey: {
                allowNull: false
            }
        });
        
    };
    
    return ClientModeReglement;
};
