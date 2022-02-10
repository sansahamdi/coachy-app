const express = require('express');
const router = express.Router();
const {
  findAllCircuits,
  findOneCircuit,
  deleteOneCircuit,
  createCircuit,
} = require('../controllers/circuitController');

router.post('/circuit', createCircuit);
router.get('/circuits', findAllCircuits).get('/circuit/:id', findOneCircuit);
router.delete('/circuit/:id', deleteOneCircuit);

module.exports = router;
