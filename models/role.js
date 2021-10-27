module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define('role', {
        nomrole: {
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

  

    return Role;
};
