const Monument = require('../models/Monument');
const Publication = require('../models/Publication');
const Utilisateur = require('../models/Utilisateur');

// @Route          /api/v1/publication
// @Description    Create publication
// @Access         Private
exports.createPublication = async (req, res, next) => {
  try {
    const {
      text_publication,
      image_importe,
      image_capture,
      UtilisateurId,
      MonumentId,
    } = req.body;
    const result = await Publication.create(
      {
        text_publication,
        image_importe,
        image_capture,
        UtilisateurId,
        MonumentId,
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

// @Route          /api/v1/publications
// @Description    Find all publications
// @Access         Public
exports.findAllPublications = async (req, res, next) => {
  try {
    const result = await Publication.findAll().then(response => {
      res.json(response);
    });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    next(err.message);
  }
};

// @Route          /api/v1/publication/:id
// @Description    Find publication by id
// @Access         Public
exports.findOnePublication = async (req, res, next) => {
  try {
    const result = await Publication.findOne({
      where: { id: req.params.id },
    }).then(response => {
      res.json(response);
    });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    next(err.message);
  }
};

// @Route          /api/v1/publication/:id
// @Description    Update publication by id
// @Access         Private
exports.updatePublication = async (req, res, next) => {
  try {
    const { text_publication } = req.body;
    const newPhoto = await Publication.update(
      { text_publication },
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

// @Route          /api/v1/publication/:id
// @Description    Delete publication by id
// @Access         Private
exports.deleteOnePublication = async (req, res, next) => {
  try {
    const result = await Publication.findOne({
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
