const express = require('express');
const router = express.Router();

const { blog_articles, article, article_creation, article_update, article_like, article_deletion } = require('../controllers/blog_controller')

router.route('/').get(blog_articles).post('/', article_creation);
router.route('/:id').get(article).put(article_update)
router.put('/like/:id', article_like);
router.put('/delete/:id', article_deletion);

module.exports = router;
