// Retrieve all Commandes from the database.

const Guide = require('../models/Guide');
const MonumentPersonnalise = require('../models/MonumentPersonnalise');

// @Route          /api/v1/monum_personnalise
// @Description    Create monum_personnalise
// @Access         Private
exports.createMonumPersonnalise = async (req, res) => {
  try {
    const { MonumentId, PersonnaliseId } = req.body;
    const result = await MonumentPersonnalise.create(
      {
        MonumentId,
        PersonnaliseId,
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

// @Route          /api/v1/monum_personnalises
// @Description    Find all monum_personnalise
// @Access         Public
exports.findAllMonumPersonnalise = (req, res, next) => {
  MonumentPersonnalise.findAll()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return next(error);
    });
};

// @Route          /api/v1/monum_personnalise/:id
// @Description    Find monum_personnalise by id
// @Access         Public
exports.findOneMonumPersonnalise = async (req, res) => {
  try {
    const result = await MonumentPersonnalise.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/monum_personnalise/:id
// @Description    Delete monum_personnalise by id
// @Access         Private
exports.deleteOneMonumPersonnalise = async (req, res) => {
  try {
    const result = await MonumentPersonnalise.findOne({
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
