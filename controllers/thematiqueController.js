const Circuit = require('../models/Circuit');
const Monument = require('../models/Monument');
const Thematique = require('../models/Thematique');

// @Route          /api/v1/thematique
// @Description    Create thematique
// @Access         Private
exports.createThematique = async (req, res) => {
  try {
    const {
      nbr_etape,
      kilometrage,
      duree,
      depart_longitude_circuit,
      depart_latitude_circuit,
      categorie_thematique,
      MonumentsId,
    } = req.body;
    const result = await Thematique.create(
      {
        nbr_etape,
        kilometrage,
        duree,
        depart_longitude_circuit,
        depart_latitude_circuit,
        categorie_thematique,
        MonumentsId,
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

// @Route          /api/v1/thematiques
// @Description    Find all thematiques
// @Access         Public
exports.findAllThematiques = (req, res, next) => {
  Thematique.findAll({
    include: [{ model: Monument, as: 'Monuments' }],
  })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return next(error);
    });
};

// @Route          /api/v1/thematique/:id
// @Description    Find thematique by id
// @Access         Public
exports.findOneThematique = async (req, res) => {
  try {
    const result = await Thematique.findOne({
      where: { id: req.params.id },
      include: [{ model: Monument, as: 'Monuments' }],
    });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/thematique/:id
// @Description    Update thematique by id
// @Access         Private
exports.updateThematique = async (req, res) => {
  try {
    const {
      nbr_etape,
      kilometrage,
      duree,
      depart_longitude_circuit,
      depart_latitude_circuit,
      categorie_thematique,
      MonumentsId,
    } = req.body;
    const newThematique = await Thematique.update(
      {
        nbr_etape,
        kilometrage,
        duree,
        depart_longitude_circuit,
        depart_latitude_circuit,
        categorie_thematique,
        MonumentsId,
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

// @Route          /api/v1/thematique/:id
// @Description    Delete thematique by id
// @Access         Private
exports.deleteOneThematique = async (req, res) => {
  try {
    const result = await Thematique.findOne({
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
