const Article = require('../models/Article');
const Boutique = require('../models/Boutique');
const Commande = require('../models/Commande');

// Retrieve all Articles from the database.

// @Route          /api/v1/article
// @Description    Create Article
// @Access         Private
exports.createArticle = async (req, res, next) => {
  try {
    const {
      nom_article,
      stock_article,
      prix_article,
      description_article,
      categorie_article,
      BoutiquesId,
    } = req.body;
    const result = await Article.create(
      {
        nom_article,
        stock_article,
        prix_article,
        description_article,
        categorie_article,
        BoutiquesId,
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

// @Route          /api/v1/articles
// @Description    Find all Articles
// @Access         Public
exports.findAllArticles = async (req, res, next) => {
  try {
    const result = await Article.findAll({
      include: [{ model: Boutique, as: 'Boutiques' }],
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

// @Route          /api/v1/article/:id
// @Description    Find Article by id
// @Access         Public
exports.findOneArticle = async (req, res, next) => {
  try {
    const result = await Article.findOne({
      where: { id: req.params.id },
      include: [{ model: Boutique, as: 'Boutiques' }],
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

// @Route          /api/v1/article/:id
// @Description    Update article by id
// @Access         Private
exports.updateArticle = async (req, res, next) => {
  try {
    const {
      nom_article,
      stock_article,
      prix_article,
      description_article,
      categorie_article,
    } = req.body;
    const newArticle = await Article.update(
      {
        nom_article,
        stock_article,
        prix_article,
        description_article,
        categorie_article,
      },
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

// @Route          /api/v1/article/:id
// @Description    Delete article by id
// @Access         Private
exports.deleteOneArticle = async (req, res, next) => {
  try {
    const result = await Article.findOne({
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
