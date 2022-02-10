const Guide = require('../models/Guide');
const Monument = require('../models/Monument');
const User = require('../models/Utilisateur');

// Retrieve all Guides from the database.

// @Route          /api/v1/guide
// @Description    Create guide
// @Access         Private
exports.createGuide = async (req, res) => {
  try {
    const { nom_guide, prenom_guide, specialite_guide, telephone_guide } =
      req.body;
    const result = await Guide.create(
      {
        nom_guide,
        prenom_guide,
        specialite_guide,
        telephone_guide,
      },
      {
        returning: true,
        plain: true,
      }
    );
    // console.log(nom_guide.replace('saher', 'ghazeli'));
    res.status(200).json({
      status: 'success',
      data: result.dataValues,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/guides
// @Description    Find all guides
// @Access         Public
exports.findAllGuides = (req, res, next) => {
  Guide.findAll({
    include: [{ model: Monument, as: 'Monuments' }],
  })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return next(error);
    });
};

// @Route          /api/v1/guide/:id
// @Description    Find guide by id
// @Access         Public
exports.findOneGuide = async (req, res) => {
  try {
    const result = await Guide.findOne({
      where: { id: req.params.id },
      include: [{ model: Monument, as: 'Monuments' }],
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

// @Route          /api/v1/guide/:id
// @Description    Update guide by id
// @Access         Private
exports.updateGuide = async (req, res) => {
  try {
    const { nom_guide, prenom_guide, specialite_guide, telephone_guide } =
      req.body;
    const newGuide = await Guide.update(
      { nom_guide, prenom_guide, specialite_guide, telephone_guide },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    ).then(function (updateGuide) {
      res.json({
        status: 'updated',
        data: updateGuide[1][0].dataValues,
      });
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/guide/:id
// @Description    Delete guide by id
// @Access         Private
exports.deleteOneGuide = async (req, res) => {
  try {
    const result = await Guide.findOne({
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
