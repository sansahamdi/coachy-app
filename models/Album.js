const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');
const Photo = require('./Photo');
const Utilisateur = require('./Utilisateur');

const Album = db.define(
  'Album',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    titre_album: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

/********************  Relation Many-to-Many of Utilisateur and Photo Through Album  **************** */
Utilisateur.belongsToMany(Photo, {
  as: 'Photos',
  through: Album,
  foreignKeyConstraint: 'PhotosId',
  // foreignKey: 'PhotosId',
  // constraints: false,
});
Photo.belongsToMany(Utilisateur, {
  as: 'Utilisateurs',
  through: Album,
  foreignKeyConstraint: 'UtilisateursId',
  //  foreignKey: 'UtilisateursId',
  // constraints: false,
});

Album.sync({ alter: true });
module.exports = Album;
