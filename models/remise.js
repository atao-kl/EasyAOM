module.exports = function (sequelize, DataTypes) {
    const Remise = sequelize.define('remise', {
        nomremise : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        valeurremise:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        conditionremise: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        datedebutremise:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        datefinremise:{
            type: DataTypes.DATE,
            allowNull: false,
        },
      
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

    return Remise;
};