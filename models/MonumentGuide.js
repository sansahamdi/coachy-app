const { DataTypes, Sequelize } = require('sequelize');
const db = require('../db/Sequelize');

const MonumentGuide = db.define(
  'MonumentGuide',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = MonumentGuide;
