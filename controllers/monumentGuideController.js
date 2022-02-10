// Retrieve all Commandes from the database.

const Guide = require('../models/Guide');
const Monument = require('../models/Monument');
const MonumentGuide = require('../models/MonumentGuide');

// @Route          /api/v1/monum_guide
// @Description    Create monum_guide
// @Access         Private
exports.createMonumentGuide = async (req, res) => {
  try {
    const { MonumentId, GuideId } = req.body;
    const result = await MonumentGuide.create(
      {
        MonumentId,
        GuideId,
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

// @Route          /api/v1/monum_guides
// @Description    Find all monum_guides
// @Access         Public
exports.findAllMonumentGuide = (req, res, next) => {
  MonumentGuide.findAll({
    include: [
      { model: Guide, as: 'Guides' },
      { model: Monument, as: 'Monuments' },
    ],
  })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return next(error);
    });
};

// @Route          /api/v1/monum_guide/:id
// @Description    Find monum_guide by id
// @Access         Public
exports.findOneMonumentGuide = async (req, res) => {
  try {
    const result = await MonumentGuide.findOne(
      {
        where: { id: req.params.id },
      },
      {
        include: [
          { model: Partenaire, as: 'Partenaires' },
          { model: Monument, as: 'Monument' },
        ],
      }
    ).then(response => {
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

// @Route          /api/v1/monum_guide/:id
// @Description    Delete monum_guide by id
// @Access         Private
exports.deleteOneMonumentGuide = async (req, res) => {
  try {
    const result = await MonumentGuide.findOne({
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
