const Boutique = require('../models/Boutique');
const Article = require('../models/Article');
const Guide = require('../models/Guide');

// @Route          /api/v1/Boutique
// @Description    Create Boutique
// @Access         Private
exports.createBoutique = async (req, res, next) => {
  try {
    const {
      nom_boutique,
      proprietaire_boutique,
      adresse_boutique,
      telephone_boutique,
    } = req.body;
    const result = await Boutique.create(
      {
        nom_boutique,
        proprietaire_boutique,
        adresse_boutique,
        telephone_boutique,
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
    next(err.message);
  }
};

// @Route          /api/v1/boutiques
// @Description    Find all Boutiques
// @Access         Public
exports.findAllBoutiques = async (req, res, next) => {
  try {
    const result = await Boutique.findAll();

    res.status(202).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    return next(err);
  }
};

// @Route          /api/v1/Boutique/:id
// @Description    Find Boutique by id
// @Access         Public
exports.findOneBoutique = async (req, res, next) => {
  try {
    const result = await Boutique.findOne({
      where: { id: req.params.id },
    });
    // .then(response => {
    //   res.json(response);
    // });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    next(err.message);
  }
};

// @Route          /api/v1/boutique/:id
// @Description    Update boutique by id
// @Access         Private
exports.updateBoutique = async (req, res, next) => {
  try {
    const {
      nom_boutique,
      proprietaire_boutique,
      adresse_boutique,
      telephone_boutique,
    } = req.body;
    const newBoutique = await Boutique.update(
      {
        nom_boutique,
        proprietaire_boutique,
        adresse_boutique,
        telephone_boutique,
      },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    )
      .then(function (role) {
        res.json({
          status: 'updated',
          data: role[1][0].dataValues,
        });
      })
      .catch(function (err) {
        res.json({ status: 'error' });
      });
  } catch (err) {
    next(err.message);
  }
};

// @Route          /api/v1/boutique/:id
// @Description    Delete boutique by id
// @Access         Private
exports.deleteOneBoutique = async (req, res, next) => {
  try {
    const result = await Boutique.findOne({
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
    next(err.message);
  }
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};
