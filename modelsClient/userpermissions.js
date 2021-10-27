module.exports = function (sequelize, DataTypes) {
    const Userpermission = sequelize.define('Userpermission', {
        deleteAt:{
            type: DataTypes.DATE,
            defaultValue: null,
        }
        
  });


    Userpermission.associate = function (models) { 
        Userpermission.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Userpermission.belongsTo(models.Permission, {
            foreignKey: {
                allowNull: false
            }
        });
        
    };
    
    return Userpermission;
};
