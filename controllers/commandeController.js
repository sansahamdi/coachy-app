const Article = require('../models/Article');
const Commande = require('../models/Commande');
const Utilisateur = require('../models/Utilisateur');
// const Op = db.Sequelize.Op;

// Retrieve all Commandes from the database.

// @Route          /api/v1/commande
// @Description    Create commande
// @Access         Private
exports.createCommande = async (req, res) => {
  try {
    const {
      quantite_commande,
      date_commande,
      mode_reception,
      mode_paiement,
      ArticleId,
      UtilisateurId,
    } = req.body;
    const result = await Commande.create(
      {
        quantite_commande,
        date_commande,
        mode_reception,
        mode_paiement,
        ArticleId,
        UtilisateurId,
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

// @Route          /api/v1/commandes
// @Description    Find all commandes
// @Access         Public
exports.findAllCommandes = (req, res, next) => {
  Commande.findAll({
    include: [
      { model: Article, as: 'Articles' },
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

// @Route          /api/v1/commande/:id
// @Description    Find commande by id
// @Access         Public
exports.findOneCommande = async (req, res) => {
  try {
    const result = await Commande.findOne(
      {
        where: { id: req.params.id },
      },
      {
        include: [
          { model: Article, as: 'Articles' },
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

// @Route          /api/v1/commande/:id
// @Description    Update commande by id
// @Access         Private
exports.updateCommande = async (req, res) => {
  try {
    const { quantite_commande, date_commande, mode_reception, mode_paiement } =
      req.body;
    const newCommande = await Commande.update(
      { quantite_commande, date_commande, mode_reception, mode_paiement },
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

// @Route          /api/v1/commande/:id
// @Description    Delete commande by id
// @Access         Private
exports.deleteOneCommande = async (req, res) => {
  try {
    const result = await Commande.findOne({
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
