const express = require('express');
const router = express.Router();
const {
  findAllCommandes,
  createCommande,
  updateCommande,
  deleteOneCommande,
  findOneCommande,
} = require('../controllers/commandeController');

router.get('/commandes', findAllCommandes).get('/commande/:id', findOneCommande);
router.post('/commande', createCommande);
router.put('/commande/:id', updateCommande);
router.delete('/commande/:id', deleteOneCommande);

module.exports = router;
