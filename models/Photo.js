const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');

const Photo = db.define(
  'Photo',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nom_photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description_photo: {
      type: DataTypes.STRING,
    },
    uri_photo: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Photo;
