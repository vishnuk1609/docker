const express = require('express');
const postController = require('../controllers/postController');

const router = express()

router.get('/',  postController.getAllPosts)
router.post('/',  postController.createPost)

router.get('/:id', postController.getOnePost)
router.patch('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)

module.exports = router