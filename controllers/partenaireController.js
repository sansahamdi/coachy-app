const Partenaire = require('../models/Partenaire');
const User = require('../models/Utilisateur');
// const Op = db.Sequelize.Op;

// Retrieve all Partenaires from the database.

// @Route          /api/v1/partenaire
// @Description    Create partenaire
// @Access         Private
exports.createPartenaire = async (req, res) => {
  try {
    const {
      nom_partenaire,
      adresse_partenaire,
      categorie_partenaire,
      telephone_partenaire,
      statut_partenaire,
      heure_ouverture_partenaire,
      heure_fermeture_partenaire,
    } = req.body;
    const result = await Partenaire.create(
      {
        nom_partenaire,
        adresse_partenaire,
        categorie_partenaire,
        telephone_partenaire,
        statut_partenaire,
        heure_ouverture_partenaire,
        heure_fermeture_partenaire,
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

// @Route          /api/v1/partenaires
// @Description    Find all partenaires
// @Access         Public
exports.findAllPartenaires = (req, res, next) => {
  Partenaire.findAll()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return next(error);
    });
};

// @Route          /api/v1/partenaire/:id
// @Description    Find partenaire by id
// @Access         Public
exports.findOnePartenaire = async (req, res) => {
  try {
    const result = await Partenaire.findOne({
      where: { id: req.params.id },
    }).then(response => {
      res.json(response);
    });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/partenaire/:id
// @Description    Update partenaire by id
// @Access         Private
exports.updatePartenaire = async (req, res) => {
  try {
    const {
      nom_partenaire,
      adresse_partenaire,
      categorie_partenaire,
      telephone_partenaire,
      statut_partenaire,
      heure_ouverture_partenaire,
      heure_fermeture_partenaire,
    } = req.body;
    const newPartenaire = await Partenaire.update(
      {
        nom_partenaire,
        adresse_partenaire,
        categorie_partenaire,
        telephone_partenaire,
        statut_partenaire,
        heure_ouverture_partenaire,
        heure_fermeture_partenaire,
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

// @Route          /api/v1/partenaire/:id
// @Description    Delete partenaire by id
// @Access         Private
exports.deleteOnePartenaire = async (req, res) => {
  try {
    const result = await Partenaire.findOne({
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
