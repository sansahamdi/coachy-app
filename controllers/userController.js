const User = require('../models/Utilisateur');
const Guide = require('../models/Guide');
const Commande = require('../models/Commande');
const Token = require('../util/token');
const Utilisateur = require('../models/Utilisateur');
const Article = require('../models/Article');
const Photo = require('../models/Photo');
const Partenaire = require('../models/Partenaire');
const Monument = require('../models/Monument');

// Retrieve all Users from the database.

// @Route          /api/v1/user
// @Description    Create user
// @Access         Private
exports.createUser = async (req, res) => {
  try {
    const {
      nom_utilisateur,
      prenom_utilisateur,
      email_utilisateur,
      password_utilisateur,
    } = req.body;
    const result = await User.create(
      {
        nom_utilisateur,
        prenom_utilisateur,
        email_utilisateur,
        password_utilisateur,
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

// @Route          /api/v1/user/login
// @Description    login
// @Access         Public
exports.loginUser = async (req, res) => {
  const { email_utilisateur, password } = req.body;
  try {
    const user = await User.findOne({ where: { email_utilisateur } });

    if (!user) {
      return res.status(400).json(false);
    }

    if (password !== user.password_utilisateur) {
      return res.status(400).json(false);
    }

    const token = Token(user.id);

    res.status(200).json({
      status: 'success',
      data: user,
      token,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/users
// @Description    Find all users
// @Access         Public
exports.findAllUsers = (req, res, next) => {
  User.findAll({
    include: [
      { model: Article, as: 'Articles' },
      { model: Photo, as: 'Photos' },
      { model: Partenaire, as: 'Partenaires' },
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
// {
//   include: [
//     {
//       model: Guide,
//       as: 'Guides',
//     },
//     // {
//     //   model: Commande,
//     //   as: 'Commandes',
//     // },
//   ],
// }

// @Route          /api/v1/user/:id
// @Description    Find user by id
// @Access         Public
exports.findOneUser = async (req, res) => {
  try {
    const result = await User.findOne({
      where: { id: req.params.id },

      include: [
        { model: Article, as: 'Articles' },
        { model: Photo, as: 'Photos' },
        { model: Partenaire, as: 'Partenaires' },
        { model: Guide, as: 'Guides' },
        { model: Monument, as: 'Monuments' },
      ],
    });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// @Route          /api/v1/user/:id
// @Description    Update user by id
// @Access         Private
exports.updateUser = async (req, res) => {
  try {
    const {
      nom_utilisateur,
      prenom_utilisateur,
      email_utilisateur,
      password_utilisateur,
    } = req.body;
    const newUser = await User.update(
      {
        nom_utilisateur,
        prenom_utilisateur,
        email_utilisateur,
        password_utilisateur,
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

// @Route          /api/v1/user/:id
// @Description    Delete user by id
// @Access         Private
exports.deleteOneUser = async (req, res) => {
  try {
    const result = await User.findOne({
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
