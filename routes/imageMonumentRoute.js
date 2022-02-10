const express = require('express');
const router = express.Router();
const {
  findAllImages,
  updateImageMonument,
  findOneImageMonument,
  deleteOneImageMonument,
  createImage,
} = require('../controllers/imageMonumentController');

router
  .get('/monum_pic', findAllImages)
  .get('/monum_pic/:id', findOneImageMonument);
router.post('/monum_pic', createImage);
router.put('/monum_pic/:id', updateImageMonument);
router.delete('/monum_pic/:id', deleteOneImageMonument);

module.exports = router;
