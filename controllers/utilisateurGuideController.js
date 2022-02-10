// Retrieve all Commandes from the database.

const Guide = require('../models/Guide');
const UtilisateurGuide = require('../models/UtilisateurGuide');

// @Route          /api/v1/user_guide
// @Description    Create user_guide
// @Access         Private
exports.createUserGuide = async (req, res) => {
  try {
    const { UtilisateurId, GuideId } = req.body;
    const result = await UtilisateurGuide.create(
      {
        UtilisateurId,
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

// @Route          /api/v1/user_guides
// @Description    Find all user_guide
// @Access         Public
exports.findAllUserGuide = (req, res, next) => {
  UtilisateurGuide.findAll({
    include: [
      { model: Guide, as: 'Guides' },
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

// @Route          /api/v1/user_guide/:id
// @Description    Find user_guide by id
// @Access         Public
exports.findOneUserGuide = async (req, res) => {
  try {
    const result = await UtilisateurGuide.findOne(
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

// @Route          /api/v1/user_guide/:id
// @Description    Delete user_guide by id
// @Access         Private
exports.deleteOneUserGuide = async (req, res) => {
  try {
    const result = await UtilisateurGuide.findOne({
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
