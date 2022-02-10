const express = require('express');
const router = express.Router();
const {
  findAllReservations,
  findOneReservation,
  createReservation,
  updateReservation,
  deleteOneReservation,
} = require('../controllers/reservationController');

router
  .get('/reservations', findAllReservations)
  .get('/reservation/:id', findOneReservation);
router.post('/reservation', createReservation);
router.put('/reservation/:id', updateReservation);
router.delete('/reservation/:id', deleteOneReservation);

module.exports = router;
