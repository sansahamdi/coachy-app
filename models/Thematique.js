// const { DataTypes } = require('sequelize');
// const db = require('../db/Sequelize');
// const Circuit = require('./Circuit');

// const Thematique = db.define(
//   'Thematique',
//   {
//     categorie_thematique: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     nbr_etape: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     kilometrage: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     duree: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     depart_longitude_circuit: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     depart_latitude_circuit: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // const Thematique = db.define(
// //   'Thematique',
// //   Object.assign(
// //     {},
// //     Circuit.primaryKeyAttribute,
// //     {
// //       categorie_thematique: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //       },
// //       nbr_etape: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //       },
// //       kilometrage: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //       },
// //       duree: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //       },
// //       depart_longitude_circuit: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //       },
// //       depart_latitude_circuit: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //       },
// //     },
// //     {
// //       timestamps: true,
// //     }
// //   )
// // );

// module.exports = Thematique;

const Sequelize = require('sequelize');
const db = require('../db/Sequelize');
const Circuit = require('../models/Circuit');
const Monument = require('../models/Monument');

const Thematique = db.define(
  'Thematique',
  Object.assign({}, Circuit.rawAttributes, {
    categorie_thematique: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nbr_etape: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    kilometrage: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    duree: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    depart_longitude_circuit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    depart_latitude_circuit: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    categorie_thematique: { type: Sequelize.STRING },
  })
);

//   foreignKey: 'MonumentsId',
//   constraints: true,
// });

// Monument.hasOne(Thematique, {
//   as: 'Thematiques',
//   foreignKeyConstraint: 'MonumentsId',
// });
// Thematique.belongsTo(Monument);

/*
Thematique.hasMany(Monument, {
  as: 'Monuments',
  constraints: false,
});

Monument.belongsTo(Thematique, {
  foreignKey: 'MonumentId',
  sourceKey: 'id',
  as: 'Thematiques',
  constraints: false,
});
*/
Thematique.sync({ alter: true });
module.exports = Thematique;
