const { DataTypes, Sequelize } = require('sequelize');
const db = require('../db/Sequelize');

const Reservation = db.define(
  'Reservation',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date_reservation: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    nombre_personne: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Reservation;
