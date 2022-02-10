const Circuit = require('../models/Circuit');
const Guide = require('../models/Guide');
const ImageMonument = require('../models/ImageMonument');
const Monument = require('../models/Monument');
const Personnalise = require('../models/Personnalise');
const Thematique = require('../models/Thematique');
const Utilisateur = require('../models/Utilisateur');

// const Op = db.Sequelize.Op;

// Retrieve all Monuments from the database.

// @Route          /api/v1/monument
// @description_monumenttion    Create monument
// @Access         Private
exports.createMonument = async (req, res) => {
  try {
    const {
      geom,
      nom_monument,
      latitude_monument,
      longitude_monument,
      statut_monument,
      importance_monument,
      accessibilite_monument,
      relief,
      adresse_monument,
      description_monument,
      affect,
      etat_conservation,
      duree_visite,
      horaire_ouverture_ete,
      horaire_ouverture_hiver,
      telephone_site,
      priorite,
      epoque_dominante,
      epoque_moins_visible,
      troisieme_epoque,
      fonction_monument,
      image_panoramique,
      modele_obj,
      modele_mtl,
      uri_video,
      qr_code,
      enregistrement_audio,
    } = req.body;
    const result = await Monument.create(
      {
        geom,
        nom_monument,
        latitude_monument,
        longitude_monument,
        statut_monument,
        importance_monument,
        accessibilite_monument,
        relief,
        adresse_monument,
        description_monument,
        affect,
        etat_conservation,
        duree_visite,
        horaire_ouverture_ete,
        horaire_ouverture_hiver,
        telephone_site,
        priorite,
        epoque_dominante,
        epoque_moins_visible,
        troisieme_epoque,
        fonction_monument,
        image_panoramique,
        modele_obj,
        modele_mtl,
        uri_video,
        qr_code,
        enregistrement_audio,
      },
      {
        returning: true,
        plain: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: result.dataValues,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/monuments
// @description_monumenttion    Find all monumetns
// @Access         Public
exports.findAllMonuments = (req, res, next) => {
  Monument.findAll({
    include: [
      { model: Guide, as: 'Guides' },
      { model: ImageMonument, as: 'ImageMonuments' },
      { model: Thematique, as: 'Thematiques' },
      { model: Personnalise, as: 'Personnalises' },
      { model: Utilisateur, as: 'Utilisateurs' },
    ],
  })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return next(error);
    });
};

// @Route          /api/v1/monument/:id
// @description_monumenttion    Find monument by id
// @Access         Public
exports.findOneMonument = async (req, res) => {
  try {
    const result = await Monument.findOne({
      where: { id: req.params.id },
      include: [
        { model: Guide, as: 'Guides' },
        { model: ImageMonument, as: 'ImageMonuments' },
        { model: Thematique, as: 'Thematiques' },
        { model: Personnalise, as: 'Personnalises' },
        { model: Utilisateur, as: 'Utilisateurs' },
      ],
    });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/monument/:id
// @description_monumenttion    Update monument by id
// @Access         Private
exports.updateMonument = async (req, res) => {
  try {
    const {
      geom,
      nom_monument,
      latitude_monument,
      longitude_monument,
      statut_monument,
      importance_monument,
      accessibilite_monument,
      relief,
      adresse_monument,
      description_monument,
      affect,
      etat_conservation,
      duree_visite,
      horaire_ouverture_ete,
      horaire_ouverture_hiver,
      telephone_site,
      priorite,
      epoque_dominante,
      epoque_moins_visible,
      troisieme_epoque,
      fonction_monument,
      image_panoramique,
      modele_obj,
      modele_mtl,
      uri_video,
      qr_code,
      enregistrement_audio,
      ThematiquesId,
    } = req.body;
    const newMonument = await Monument.update(
      {
        geom,
        nom_monument,
        latitude_monument,
        longitude_monument,
        statut_monument,
        importance_monument,
        accessibilite_monument,
        relief,
        adresse_monument,
        description_monument,
        affect,
        etat_conservation,
        duree_visite,
        horaire_ouverture_ete,
        horaire_ouverture_hiver,
        telephone_site,
        priorite,
        epoque_dominante,
        epoque_moins_visible,
        troisieme_epoque,
        fonction_monument,
        image_panoramique,
        modele_obj,
        modele_mtl,
        uri_video,
        qr_code,
        enregistrement_audio,
        ThematiquesId,
      },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    ).then(function (role) {
      res.json({
        status: 'updated',
        data: role[1][0].dataValues,
      });
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/monument/:id
// @description_monumenttion    Delete monument by id
// @Access         Private
exports.deleteOneMonument = async (req, res) => {
  try {
    const result = await Monument.findOne({
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });

    if (!result)
      return res.status(404).json({
        status: 'Failed',
        message: 'There is no data with this id',
      });
    await result.destroy({ id: req.params.id }); // when i find the result i deleted it by destroy function

    res.status(200).json({
      status: 'success',
      data: result.dataValues,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};
