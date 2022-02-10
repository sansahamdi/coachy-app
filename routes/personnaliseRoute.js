const express = require('express');
const router = express.Router();
const {
  findAllPersonnalises,
  createPersonnalise,
  updatePersonnalise,
  deleteOnePersonnalise,
  findOnePersonnalise,
} = require('../controllers/personnaliseController');

router.get('/personnalises', findAllPersonnalises).get('/personnalise/:id', findOnePersonnalise);
router.post('/personnalise', createPersonnalise);
router.put('/personnalise/:id', updatePersonnalise);
router.delete('/personnalise/:id', deleteOnePersonnalise);

module.exports = router;
