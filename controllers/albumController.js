const Album = require('../models/Album');
const Article = require('../models/Article');
const Boutique = require('../models/Boutique');
const Commande = require('../models/Commande');
const Utilisateur = require('../models/Utilisateur');
const Photo = require('../models/Photo');

// @Route          /api/v1/album
// @Description    Create Album
// @Access         Private
exports.createAlbum = async (req, res, next) => {
  try {
    const { titre_album, UtilisateurId, PhotoId } = req.body;
    const result = await Album.create(
      {
        titre_album,
        UtilisateurId,
        PhotoId,
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

// @Route          /api/v1/albums
// @Description    Find all Albums
// @Access         Public
exports.findAllAlbums = async (req, res, next) => {
  try {
    const result = await Album.findAll({
      include: [
        { model: Utilisateur, as: 'Utilisateurs' },
        { model: Photo, as: 'Photos' },
      ],
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

// @Route          /api/v1/album/:id
// @Description    Find Album by id
// @Access         Public
exports.findOneAlbum = async (req, res, next) => {
  try {
    const result = await Album.findOne(
      {
        where: { id: req.params.id },
      },
      {
        include: [
          { model: Utilisateur, as: 'Utilisateurs' },
          { model: Photo, as: 'Photos' },
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
    next(err.message);
  }
};

// @Route          /api/v1/album/:id
// @Description    Update album by id
// @Access         Private
exports.updateAlbum = async (req, res, next) => {
  try {
    const { titre_album } = req.body;
    const newAlbum = await Album.update(
      { titre_album },
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

// @Route          /api/v1/album/:id
// @Description    Delete album by id
// @Access         Private
exports.deleteOneAlbum = async (req, res, next) => {
  try {
    const result = await Album.findOne({
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
