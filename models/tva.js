module.exports = function (sequelize, DataTypes) {
    const Tva = sequelize.define('tva', {
        nomtva : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        valeurtva:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
      
    },
    {
            schema: 'schemaeasyaoaccount',
        }
    );

    return Tva;
};
