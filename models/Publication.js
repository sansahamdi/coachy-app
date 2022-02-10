const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');

const Publication = db.define(
  'Publication',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    text_publication: {
      type: DataTypes.STRING,
    },
    image_importe: {
      type: DataTypes.STRING,
    },
    image_capture: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Publication;
