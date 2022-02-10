const { Sequelize, DataTypes } = require('sequelize');
var pg = require('pg');
pg.defaults.ssl = true;
const sequelize = new Sequelize({
  logging: false,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: 5432,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// async () => {
//   await sequelize.sync({ force: true });
// };

sequelize.sync({ alter: true });

module.exports = sequelize;
