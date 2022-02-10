const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');
const Utilisateur = require('./Utilisateur');
const Article = require('./Article');

const Commande = db.define(
  'Commande',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quantite_commande: {
      type: DataTypes.INTEGER,
    },
    mode_reception: {
      type: DataTypes.STRING,
    },
    mode_paiement: {
      type: DataTypes.STRING,
    },
    statut_commande: {
      type: DataTypes.STRING,
    },
    taxe: {
      type: DataTypes.INTEGER,
    },
    frais_livraison: {
      type: DataTypes.INTEGER,
    },
    total_prix: {
      type: DataTypes.INTEGER,
    },
    prix_unitaire: {
      type: DataTypes.INTEGER,
    },
    date_livraison: {
      type: DataTypes.DATE,
    },
    // UtilisateurId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   references: {
    //     model: 'Utilisateur',
    //     key: 'id',
    //   },
    // },
    // ArticleId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   references: {
    //     model: 'Article',
    //     key: 'id',
    //   },
    // },
  },
  {
    timestamps: true,
  }
);


module.exports = Commande;
