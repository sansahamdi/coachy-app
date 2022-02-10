// const { DataTypes, Sequelize } = require('sequelize');
// const db = require('../db/Sequelize');
// const Circuit = require('./Circuit');
// // const sequelize = new Sequelize('postgres::memory:');

// const Personnalise = db.define(
//   'Personnalise',
//   Object.assign({}, Circuit.rawAttributes, {
//     duree_personnalise: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//     epoque_circuit: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     fonction_circuit: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     mobilite_circuit: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     moyen_transport: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     lieu_depart_longitude: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     lieu_depart_latitude: {
//       type: DataTypes.STRING,
//     },
//     temps_depart: {
//       type: DataTypes.DATE,
//     },
//   }),
//   {
//     timestamps: true,
//   }
// );

// // const Personnalise = db.define(
// //   'Personnalise',
// //   {
// //     duree_personnalise: {
// //       type: DataTypes.INTEGER,
// //       allowNull: true,
// //     },
// //     epoque_circuit: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     fonction_circuit: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     mobilite_circuit: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     moyen_transport: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     lieu_depart_longitude: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     lieu_depart_latitude: {
// //       type: DataTypes.STRING,
// //     },
// //     temps_depart: {
// //       type: DataTypes.DATE,
// //     },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const Personnalise = Circuit.init(
// //   {
// //     duree_personnalise: {
// //       type: DataTypes.INTEGER,
// //       allowNull: true,
// //     },
// //     epoque_circuit: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     fonction_circuit: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     mobilite_circuit: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     moyen_transport: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     lieu_depart_longitude: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //     },
// //     lieu_depart_latitude: {
// //       type: DataTypes.STRING,
// //     },
// //     temps_depart: {
// //       type: DataTypes.DATE,
// //     },
// //   },
// //   {
// //     modelName: Circuit,
// //     sequelize,
// //   }
// // );

// //module.exports = Personnalise;
// // Personnalise.sync({ alter: true });
// module.exports = Personnalise;

const Sequelize = require('sequelize');
const db = require('../db/Sequelize');
const Circuit = require('../models/Circuit');
const Monument = require('../models/Monument');
const MonumentPersonnalise = require('./MonumentPersonnalise');

const Personnalise = db.define(
  'Personnalise',
  Object.assign({}, Circuit.rawAttributes, {
    duree_personnalise: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    epoque_circuit: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fonction_circuit: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    mobilite_circuit: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    moyen_transport: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lieu_depart_longitude: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lieu_depart_latitude: {
      type: Sequelize.STRING,
    },
    temps_depart: { type: Sequelize.DATE },
  })
);

Personnalise.sync({ alter: true });
module.exports = Personnalise;
