const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');

const Partenaire = db.define(
  'Partenaire',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nom_partenaire: {
      type: DataTypes.STRING,
    },
    adresse_partenaire: {
      type: DataTypes.STRING,
    },
    categorie_partenaire: {
      type: DataTypes.STRING,
    },
    telephone_partenaire: {
      type: DataTypes.INTEGER,
    },
    statut_partenaire: {
      type: DataTypes.STRING,
    },
    heure_ouverture_partenaire: {
      type: DataTypes.TIME,
    },
    heure_fermeture_partenaire: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Partenaire;
