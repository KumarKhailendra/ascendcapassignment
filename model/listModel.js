const { Users } = require("../Database/db");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Lists', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        listName: {
          type: DataTypes.STRING,
        },
        author: {
          type: DataTypes.UUID,
          references: {
            model: Users,
            key: 'id'
          }
        },
    },{
        timestaps: true 
    });
}