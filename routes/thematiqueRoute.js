const express = require('express');
const router = express.Router();
const {
  findAllThematiques,
  createThematique,
  updateThematique,
  deleteOneThematique,
  findOneThematique,
} = require('../controllers/thematiqueController');

router.get('/thematiques', findAllThematiques).get('/thematique/:id', findOneThematique);
router.post('/thematique', createThematique);
router.put('/thematique/:id', updateThematique);
router.delete('/thematique/:id', deleteOneThematique);

module.exports = router;
