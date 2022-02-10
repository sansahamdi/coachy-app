const Album = require('../models/Album');
const Photo = require('../models/Photo');

// @Route          /api/v1/photo
// @Description    Create Photo
// @Access         Private
exports.createPhoto = async (req, res, next) => {
  try {
    const { nom_photo, description_photo, uri_photo, AlbumId } = req.body;
    const result = await Photo.create(
      {
        nom_photo,
        description_photo,
        uri_photo,
        AlbumId,
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

// @Route          /api/v1/photos
// @Description    Find all Photos
// @Access         Public
exports.findAllPhotos = async (req, res, next) => {
  try {
    const result = await Photo.findAll().then(response => {
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

// @Route          /api/v1/photo/:id
// @Description    Find Photo by id
// @Access         Public
exports.findOnePhoto = async (req, res, next) => {
  try {
    const result = await Photo.findOne(
      {
        where: { id: req.params.id },
      },
      {
        include: [{ model: Album, as: 'Albums' }],
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

// @Route          /api/v1/photo/:id
// @Description    Update photo by id
// @Access         Private
exports.updatePhoto = async (req, res, next) => {
  try {
    const { nom_photo, description_photo } = req.body;
    const newPhoto = await Photo.update(
      { nom_photo, description_photo },
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

// @Route          /api/v1/photo/:id
// @Description    Delete photo by id
// @Access         Private
exports.deleteOnePhoto = async (req, res, next) => {
  try {
    const result = await Photo.findOne({
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
