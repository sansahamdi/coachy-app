const Circuit = require('../models/Circuit');
const Personnalise = require('../models/Personnalise');
const Thematique = require('../models/Thematique');

// @Route          /api/v1/circuit
// @Description    Create circuit
// @Access         Private
exports.createCircuit = async (req, res) => {
  try {
    const { type_circuit } = req.body;
    const result = await Circuit.create(
      {
        type_circuit,
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

// @Route          /api/v1/circuits
// @Description    Find all circuits
// @Access         Public
exports.findAllCircuits = async (req, res, next) => {
  try {
    const result1 = await Thematique.findAll();
    const result2 = await Personnalise.findAll();
    res.status(201).json({
      status: 'success',
      data: [...result1, ...result2],
    });
  } catch (err) {
    next(err.message);
  }
};

// @Route          /api/v1/circuit/:id
// @Description    Find Circuit by id
// @Access         Public
exports.findOneCircuit = async (req, res, next) => {
  try {
    const result = await Circuit.findOne({
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

// @Route          /api/v1/circuit/:id
// @Description    Update circuit by id
// @Access         Private
// exports.updateCircuit = async (req, res, next) => {
//   try {
//     const {
//       nbr_etape,
//       kilometrage,
//       duree,
//       depart_longitude_circuit,
//       depart_latitude_circuit,
//     } = req.body;
//     const newCircuit = await Circuit.update(
//       {
//         nbr_etape,
//         kilometrage,
//         duree,
//         depart_longitude_circuit,
//         depart_latitude_circuit,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//         returning: true,
//       }
//     )
//       .then(function (role) {
//         res.json({
//           status: 'updated',
//           data: role[1][0].dataValues,
//         });
//       })
//       .catch(function (err) {
//         res.json({ status: 'error' });
//       });
//   } catch (err) {
//     next(err.message);
//   }
// };

// @Route          /api/v1/circuit/:id
// @Description    Delete circuit by id
// @Access         Private
exports.deleteOneCircuit = async (req, res, next) => {
  try {
    const result = await Circuit.findOne({
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
