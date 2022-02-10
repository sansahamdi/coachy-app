const express = require('express');
const router = express.Router();
const {
  findAllMonumPersonnalise,
  findOneMonumPersonnalise,
  createMonumPersonnalise,
  deleteOneMonumPersonnalise,
} = require('../controllers/monumentPersonnaliseController');

router
  .get('/monum_personnalises', findAllMonumPersonnalise)
  .get('/monum_personnalise/:id', findOneMonumPersonnalise);
router.post('/monum_personnalise', createMonumPersonnalise);
router.delete('/monum_personnalise/:id', deleteOneMonumPersonnalise);

module.exports = router;
