const express = require('express');
const router = express.Router();
const {
  createAlbum,
  findAllAlbums,
  findOneAlbum,
  updateAlbum,
  deleteOneAlbum,
} = require('../controllers/albumController');

router.get('/albums', findAllAlbums).get('/album/:id', findOneAlbum);
router.post('/album', createAlbum);
router.put('/album/:id', updateAlbum);
router.delete('/album/:id', deleteOneAlbum);

module.exports = router;
