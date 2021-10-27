User = require("user.js")(sequelize, Sequelize);
Role = require("role.js")(sequelize, Sequelize);

Role.belongsToMany(User, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
User.belongsToMany(Role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});