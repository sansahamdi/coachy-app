const ImageMonument = require('../models/ImageMonument');
const Monument = require('../models/Monument');

// @Route          /api/v1/monum_pic
// @Description    Create monument picture
// @Access         Private
exports.createImage = async (req, res, next) => {
  try {
    const { designation_monument, uri_image_monument, MonumentsId } = req.body;
    const result = await ImageMonument.create(
      {
        designation_monument,
        uri_image_monument,
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
    next(err.message);
  }
};

// @Route          /api/v1/monum_pic
// @Description    Find all monument pictures
// @Access         Public
exports.findAllImages = async (req, res, next) => {
  try {
    const result = await ImageMonument.findAll({
      include: [{ model: Monument, as: 'Monuments' }],
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

// @Route          /api/v1/monum_pic/:id
// @Description    Find monument picture by id
// @Access         Public
exports.findOneImageMonument = async (req, res, next) => {
  try {
    const result = await ImageMonument.findOne(
      {
        where: { id: req.params.id },
      },
      {
        include: [{ model: Monument, as: 'Monuments' }],
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

// @Route          /api/v1/monum_pic/:id
// @Description    Update monument picture by id
// @Access         Private
exports.updateImageMonument = async (req, res, next) => {
  try {
    const { designation_monument } = req.body;
    const newPhoto = await ImageMonument.update(
      { designation_monument },
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

// @Route          /api/v1/monum_pic/:id
// @Description    Delete monument picture by id
// @Access         Private
exports.deleteOneImageMonument = async (req, res, next) => {
  try {
    const result = await ImageMonument.findOne({
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
