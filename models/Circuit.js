// const { DataTypes, Sequelize } = require('sequelize');
// const db = require('../db/Sequelize');
// const Thematique = require('./Thematique');
// const Personnalise = require('./Personnalise');

// const Circuit = db.define(
//   'Circuit',
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     type_circuit: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // /********************  Relation One-to-One of Circuit and Thematique   **************** */
// // Circuit.hasMany(Thematique, {
// //   as: 'Thematiques',
// //   foreignKey: 'CircuitsId',
// //   constraints: false,
// // });
// // Thematique.belongsTo(Circuit, {
// //   as: 'Circuits',
// //   constraints: false,
// // });

// // /********************  Relation One-to-One of Circuit and Personnalise   **************** */
// // Circuit.hasMany(Personnalise, {
// //   as: 'Personnalises',
// //   foreignKey: 'CircuitsId',
// //   constraints: false,
// // });
// // Personnalise.belongsTo(Circuit, {
// //   as: 'Circuits',
// //   constraints: false,
// // });

// module.exports = Circuit;

const { DataTypes, Sequelize } = require('sequelize');
const db = require('../db/Sequelize');

const Circuit = db.define('Circuit', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    // autoIncrement: true,
  },
  type_circuit: {
    type: DataTypes.STRING,
  },
});

Circuit.sync({ alter: true });
module.exports = Circuit;
