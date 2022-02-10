const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');
const ImageMonument = require('./ImageMonument');
const Guide = require('./Guide');
const Circuit = require('./Circuit');
const MonumentGuide = require('./MonumentGuide');
const Personnalise = require('./Personnalise');
const Thematique = require('./Thematique');
const MonumentPersonnalise = require('./MonumentPersonnalise');

const Monument = db.define(
  'Monument',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    geom: {
      type: DataTypes.STRING,
    },
    nom_monument: {
      type: DataTypes.STRING,
    },
    latitude_monument: {
      type: DataTypes.STRING,
    },
    longitude_monument: {
      type: DataTypes.STRING,
    },
    statut_monument: {
      type: DataTypes.STRING,
    },
    importance_monument: {
      type: DataTypes.STRING,
    },
    accessibilite_monument: {
      type: DataTypes.STRING,
    },
    relief: {
      type: DataTypes.STRING,
    },
    adresse_monument: {
      type: DataTypes.STRING,
    },
    description_monument: {
      type: DataTypes.STRING(20000),
    },
    affect: {
      type: DataTypes.STRING,
    },
    etat_conservation: {
      type: DataTypes.INTEGER,
    },
    duree_visite: {
      type: DataTypes.INTEGER,
    },
    horaire_ouverture_ete: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    horaire_fermeture_ete: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    horaire_ouverture_hiver: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    horaire_fermeture_hiver: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    telephone_site: {
      type: DataTypes.INTEGER,
    },
    priorite: {
      type: DataTypes.STRING,
    },
    epoque_dominante: {
      type: DataTypes.STRING,
    },
    epoque_moins_visible: {
      type: DataTypes.STRING,
    },
    troisieme_epoque: {
      type: DataTypes.STRING,
    },
    fonction_monument: {
      type: DataTypes.STRING,
    },
    image_panoramique: {
      type: DataTypes.STRING,
    },
    modele_obj: {
      type: DataTypes.STRING,
    },
    modele_mtl: {
      type: DataTypes.STRING,
    },
    uri_video: {
      type: DataTypes.STRING,
    },
    qr_code: {
      type: DataTypes.STRING,
    },
    enregistrement_audio: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Monument.sync({ alter: true });

/********************  Relation One-to-Many of Monument and ImageMonument   **************** */
Monument.hasMany(ImageMonument, {
  as: 'ImageMonuments',
  foreignKey: 'MonumentsId',
  constraints: false,
});
ImageMonument.belongsTo(Monument, {
  as: 'Monuments',
  constraints: false,
});

/********************  Relation Many-to-Many of Monument and Guide through MonumentGuide  **************** */
Monument.belongsToMany(Guide, {
  as: 'Guides',
  through: MonumentGuide,
  foreignKey: 'ArticlesId',
  constraints: false,
});
Guide.belongsToMany(Monument, {
  as: 'Monuments',
  through: MonumentGuide,
  foreignKey: 'UtilisateursId',
  constraints: false,
});

/****************   Relation One-to-Many of Thematique and Monument   ***** */
Thematique.hasMany(Monument, {
  as: 'Monuments',
  foreignKey: 'ThematiquesId',
  constraints: false,
  //  sourceKey: 'id_publication',
});

Monument.belongsTo(Thematique, {
  as: 'Thematiques',
  constraints: false,
});

/********************  Relation Many-to-Many of Monument and Personnalise through MonumentPersonnalise   **************** */
Monument.belongsToMany(Personnalise, {
  as: 'Personnalises',
  through: MonumentPersonnalise,
  //foreignKey: 'ArticlesId',
  constraints: false,
});
Personnalise.belongsToMany(Monument, {
  as: 'Monuments',
  through: MonumentPersonnalise,
  // foreignKey: 'UtilisateursId',
  constraints: false,
});

module.exports = Monument;
