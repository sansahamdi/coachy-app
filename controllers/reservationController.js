const Partenaire = require('../models/Partenaire');
const Reservation = require('../models/Reservation');
const Utilisateur = require('../models/Utilisateur');

// Retrieve all Commandes from the database.

// @Route          /api/v1/reservation
// @Description    Create reservation
// @Access         Private
exports.createReservation = async (req, res) => {
  try {
    const { date_reservation, nombre_personne, UtilisateurId, PartenaireId } =
      req.body;
    const result = await Reservation.create(
      {
        date_reservation,
        nombre_personne,
        UtilisateurId,
        PartenaireId,
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

// @Route          /api/v1/reservation
// @Description    Find all reservations
// @Access         Public
exports.findAllReservations = (req, res, next) => {
  Reservation.findAll({
    include: [
      { model: Partenaire, as: 'Partenaires' },
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

// @Route          /api/v1/reservation/:id
// @Description    Find reservation by id
// @Access         Public
exports.findOneReservation = async (req, res) => {
  try {
    const result = await Reservation.findOne(
      {
        where: { id: req.params.id },
      },
      {
        include: [
          { model: Partenaire, as: 'Partenaires' },
          { model: Utilisateur, as: 'Utilisateurs' },
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

// @Route          /api/v1/reservation/:id
// @Description    Update reservation by id
// @Access         Private
exports.updateReservation = async (req, res) => {
  try {
    const { date_reservation, nombre_personne } = req.body;
    const newReservation = await Reservation.update(
      { date_reservation, nombre_personne },

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

// @Route          /api/v1/reservation/:id
// @Description    Delete reservation by id
// @Access         Private
exports.deleteOneReservation = async (req, res) => {
  try {
    const result = await Reservation.findOne({
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
