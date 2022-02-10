const express = require('express');
const router = express.Router();
const {
  findAllGuides,
  createGuide,
  updateGuide,
  deleteOneGuide,
  findOneGuide,
} = require('../controllers/guideController');

router.get('/guides', findAllGuides).get('/guide/:id', findOneGuide);
router.post('/guide', createGuide);
router.put('/guide/:id', updateGuide);
router.delete('/guide/:id', deleteOneGuide);

module.exports = router;
