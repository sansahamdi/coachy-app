const express = require('express');
const router = express.Router();
const {
    findAllBoutiques,
    createBoutique,
    updateBoutique,
    deleteOneBoutique,
    findOneBoutique,
} = require('../controllers/boutiqueController');

router.get('/boutiques', findAllBoutiques).get('/boutique/:id', findOneBoutique);
router.post('/boutique', createBoutique);
router.put('/boutique/:id', updateBoutique);
router.delete('/boutique/:id', deleteOneBoutique);

module.exports = router;
