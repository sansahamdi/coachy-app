const express = require('express');
const router = express.Router();
const {
  findAllUserGuide,
  findOneUserGuide,
  createUserGuide,
  deleteOneUserGuide,
} = require('../controllers/utilisateurGuideController');

router
  .get('/user_guides', findAllUserGuide)
  .get('/user_guide/:id', findOneUserGuide);
router.post('/user_guide', createUserGuide);
router.delete('/user_guide/:id', deleteOneUserGuide);

module.exports = router;
