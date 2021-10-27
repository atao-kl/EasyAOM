module.exports = function (sequelize, DataTypes) {
    const Permission = sequelize.define('permission', {
        nompermission: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
      
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

  

    return Permission;
};
