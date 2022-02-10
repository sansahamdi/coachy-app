const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');
const Boutique = require('./Boutique');
const Commande = require('./Commande');

const Article = db.define(
  'Article',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nom_article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock_article: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prix_article: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description_article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categorie_article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

/***********************  Relation One-to-Many of Article and Boutique  ********************* */
Boutique.hasMany(Article, {
  as: 'Articles',
  foreignKey: 'BoutiquesId',
  constraints: false,
});
Article.belongsTo(Boutique, {
  as: 'Boutiques',
  constraints: false,
});

module.exports = Article;
