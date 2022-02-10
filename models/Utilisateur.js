const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');
const Guide = require('./Guide');
const Circuit = require('./Circuit');
const Partenaire = require('./Partenaire');
const Publication = require('./Publication');
const Article = require('./Article');
const Commande = require('./Commande');
const Monument = require('./Monument');
const Personnalise = require('./Personnalise');
const Reservation = require('./Reservation');
const UtilisateurGuide = require('./UtilisateurGuide');
const Thematique = require('./Thematique');

const Utilisateur = db.define(
  'Utilisateur',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nom_utilisateur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom_utilisateur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age_utilisateur: {
      type: DataTypes.INTEGER,
    },
    centre_interets: {
      type: DataTypes.STRING,
    },
    email_utilisateur: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, ///A verifier,
    },
    password_utilisateur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone_utilisateur: {
      type: DataTypes.INTEGER,
    },
    photo_utilisateur: {
      type: DataTypes.STRING,
    },
    adresse_utilisateur: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ville_utilisateur: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    code_postal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

/********************  Relation Many-to-Many of Utilisateur and Monument through Publications   **************** */
Utilisateur.belongsToMany(Monument, {
  as: 'Monuments',
  through: Publication,
  // foreignKey: 'MonumentsId',
  // constraints:false
});
Monument.belongsToMany(Utilisateur, {
  as: 'Utilisateurs',
  through: Publication,
  // foreignKey: 'UtilisateursId',
  // constraints:false
});

/********************  Relation Many-to-Many of Utilisateur and Article through Commande   **************** */
Utilisateur.belongsToMany(Article, {
  as: 'Articles',
  through: Commande,
  //foreignKey: 'ArticlesId',
  // constraints: false,
});
Article.belongsToMany(Utilisateur, {
  as: 'Utilisateurs',
  through: Commande,
  // foreignKey: 'UtilisateursId',
  // constraints: false,
});

/********************  Relation Many-to-Many of Utilisateur and Guide through Utilisateur_Guide  **************** */
Utilisateur.belongsToMany(Guide, {
  as: 'Guides',
  through: UtilisateurGuide,
  //foreignKey: 'ArticlesId',
  // constraints: false,
});
Guide.belongsToMany(Utilisateur, {
  as: 'Utilisateurs',
  through: UtilisateurGuide,
  // foreignKey: 'UtilisateursId',
  // constraints: false,
});

/********************  Relation Many-to-Many of Utilisateur and Partenaire through Reservation  **************** */
Utilisateur.belongsToMany(Partenaire, {
  as: 'Partenaires',
  through: Reservation,
  //foreignKey: 'ArticlesId',
  // constraints: false,
});
Partenaire.belongsToMany(Utilisateur, {
  as: 'Utilisateurs',
  through: Reservation,
  // foreignKey: 'UtilisateursId',
  // constraints: false,
});

/****************   Relation One-to-Many of Utilisateur and Personnalise   ***** */
Utilisateur.hasMany(Personnalise, {
  as: 'Personnalises',
  foreignKey: 'UtilisateursId',
  constraints: false,
});
Personnalise.belongsTo(Utilisateur, {
  as: 'Utilisateurs',
  constraints: false,
});

/****************   Relation One-to-Many of Utilisateur and Thematique   ***** */
Utilisateur.hasMany(Thematique, {
  as: 'Thematiques',
  foreignKey: 'UtilisateursId',
  constraints: false,
});
Thematique.belongsTo(Utilisateur, {
  as: 'Utilisateurs',
  constraints: false,
});

module.exports = Utilisateur;
