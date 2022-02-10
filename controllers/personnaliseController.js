const Personnalise = require('../models/Personnalise');
const Circuit = require('../models/Circuit');
const Utilisateur = require('../models/Utilisateur');
const Monument = require('../models/Monument');
// Retrieve all Personnalises from the database.

// @Route          /api/v1/personnalise
// @Description    Create personnalise
// @Access         Private

exports.createPersonnalise = async (req, res) => {
  try {
    const {
      duree_personnalise,
      epoque_circuit,
      fonction_circuit,
      mobilite_circuit,
      moyen_transport,
      lieu_depart_longitude,
      lieu_depart_latitude,
      temps_depart,
      UtilisateursId,
    } = req.body;
    const result = await Personnalise.create(
      {
        duree_personnalise,
        epoque_circuit,
        fonction_circuit,
        mobilite_circuit,
        moyen_transport,
        lieu_depart_longitude,
        lieu_depart_latitude,
        temps_depart,
        UtilisateursId,
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

// @Route          /api/v1/personnalises
// @Description    Find all personnalises
// @Access         Public
exports.findAllPersonnalises = (req, res, next) => {
  Personnalise.findAll({
    include: [
      { model: Utilisateur, as: 'Utilisateurs' },
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

// @Route          /api/v1/personnalise/:id
// @Description    Find personnalise by id
// @Access         Public
exports.findOnePersonnalise = async (req, res) => {
  try {
    const result = await Personnalise.findOne({
      where: { id: req.params.id },
      include: [
        { model: Utilisateur, as: 'Utilisateurs' },
        { model: Monument, as: 'Monuments' },
      ],
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

// @Route          /api/v1/personnalise/:id
// @Description    Update personnalise by id
// @Access         Private
exports.updatePersonnalise = async (req, res) => {
  try {
    const {
      duree_personnalise,
      epoque_circuit,
      fonction_circuit,
      mobilite_circuit,
      moyen_transport,
      lieu_depart_longitude,
      lieu_depart_latitude,
      temps_depart,
    } = req.body;
    const newPersonnalise = await Personnalise.update(
      {
        duree_personnalise,
        epoque_circuit,
        fonction_circuit,
        mobilite_circuit,
        moyen_transport,
        lieu_depart_longitude,
        lieu_depart_latitude,
        temps_depart,
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

// @Route          /api/v1/personnalise/:id
// @Description    Delete personnalise by id
// @Access         Private
exports.deleteOnePersonnalise = async (req, res) => {
  try {
    const result = await Personnalise.findOne({
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });

    if (!result)
      return res.status(404).json({
        status: 'Failed',
        message: 'There is no data with this id',
      });
    await result.destroy({ epoque_circuit: req.params.id }); // when i find the result i deleted it by destroy function

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
