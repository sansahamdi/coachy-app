const express = require('express');
const router = express.Router();
const {
  findAllPublications,
  createPublication,
  findOnePublication,
  updatePublication,
  deleteOnePublication,
} = require('../controllers/publicationController');

router
  .get('/publications', findAllPublications)
  .get('/publication/:id', findOnePublication);
router.post('/publication', createPublication);
router.put('/publication/:id', updatePublication);
router.delete('/publication/:id', deleteOnePublication);

module.exports = router;
