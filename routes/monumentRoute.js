const express = require('express');

const router = express.Router();
const {
  findAllMonuments,
  createMonument,
  updateMonument,
  deleteOneMonument,
  findOneMonument,
} = require('../controllers/monumentController');

router.get('/monuments', findAllMonuments).get('/monument/:id', findOneMonument);
router.post('/monument', createMonument);
router.put('/monument/:id', updateMonument);
router.delete('/monument/:id', deleteOneMonument);

module.exports = router;
