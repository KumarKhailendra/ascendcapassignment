module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Khailendra"
        },
        lastName: {
        type: DataTypes.STRING,
        defaultValue: "Prasad"
        },
        email: {
        type: DataTypes.STRING,
        defaultValue: "khailendraprasad@gmail.com"
        },
        password: {
        type: DataTypes.STRING,
        defaultValue: "123456"
        },
    },{
        timestaps: true 
    })
}