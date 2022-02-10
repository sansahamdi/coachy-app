const express = require('express');
const router = express.Router();
const {
  findAllArticles,
  createArticle,
  updateArticle,
  deleteOneArticle,
  findOneArticle,
} = require('../controllers/articleController');

router.get('/articles', findAllArticles).get('/article/:id', findOneArticle);
router.post('/article', createArticle);
router.put('/article/:id', updateArticle);
router.delete('/article/:id', deleteOneArticle);

module.exports = router;
