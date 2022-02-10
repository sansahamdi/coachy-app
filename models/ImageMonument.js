const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');

const ImageMonument = db.define(
  'ImageMonument',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    uri_image_monument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation_monument: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ImageMonument;
