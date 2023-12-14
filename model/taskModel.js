const { Lists } = require("../Database/db")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Tasks",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        taskName: {
            type: DataTypes.STRING,
        },
        listId: {
            type: DataTypes.INTEGER,
            references: {
                model: Lists,
                key: 'id'
            }
        }
    },{
        timestaps: true 
    })
}