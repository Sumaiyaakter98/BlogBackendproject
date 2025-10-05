const express = require('express');
const router = express.Router();
const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
} = require('../controllers/blogController.js');

router.post('/create', createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.put('/update/:id', updateBlog);
router.delete('/delete/:id', deleteBlog);

module.exports = router;