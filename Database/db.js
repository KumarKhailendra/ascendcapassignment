const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './Database/database.sqlite', // Replace with the path where you want to store your SQLite database file
});

sequelize.authenticate() // Set force to true to drop existing tables and recreate them
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

  const db = {}

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.Users = require("../model/userModel")(sequelize, DataTypes);
  db.Lists = require("../model/listModel")(sequelize, DataTypes);
  db.Tasks = require("../model/taskModel")(sequelize, DataTypes);
  db.sequelize.sync({force: false}).then(()=>console.log("ok"));
  db.Users.hasMany(db.Lists, {foreignKey: 'author', as: "creator"})
  db.Lists.belongsTo(db.Users,{foreignKey: 'author', as: "creator"});
  db.Lists.hasMany(db.Tasks,{foreignKey: 'listId'});
  db.Tasks.belongsTo(db.Lists,{foreignKey: 'listId'});

  module.exports = db;