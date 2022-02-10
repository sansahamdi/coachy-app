const express = require('express');
const router = express.Router();
const {
  findAllPhotos,
  findOnePhoto,
  updatePhoto,
  createPhoto,
  deleteOnePhoto,
} = require('../controllers/photoController');

router.get('/photos', findAllPhotos).get('/photo/:id', findOnePhoto);
router.post('/photo', createPhoto);
router.put('/photo/:id', updatePhoto);
router.delete('/photo/:id', deleteOnePhoto);

module.exports = router;
