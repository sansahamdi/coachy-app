const express = require('express');
const router = express.Router();
const {
  findAllPartenaires,
  createPartenaire,
  updatePartenaire,
  deleteOnePartenaire,
  findOnePartenaire,
} = require('../controllers/partenaireController');

router.get('/partenaires', findAllPartenaires).get('/partenaire/:id', findOnePartenaire);
router.post('/partenaire', createPartenaire);
router.put('/partenaire/:id', updatePartenaire);
router.delete('/partenaire/:id', deleteOnePartenaire);

module.exports = router;
