const express = require('express');
const router = express.Router();
const {
  findAllMonumentGuide,
  createMonumentGuide,
  findOneMonumentGuide,
  deleteOneMonumentGuide,
} = require('../controllers/monumentGuideController');

router
  .get('/monum_guides', findAllMonumentGuide)
  .get('/monum_guide/:id', findOneMonumentGuide);
router.post('/monum_guide', createMonumentGuide);
router.delete('/monum_guide/:id', deleteOneMonumentGuide);

module.exports = router;
