const express = require('express');
const router = express.Router();
const { getAllBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

// Blog CRUD işlemleri
router.get('/blogs', getAllBlogs);       // Blogları listele
router.post('/blogs', createBlog);       // Yeni bir blog oluştur
router.put('/blogs/:id', updateBlog);    // Blog güncelle
router.delete('/blogs/:id', deleteBlog); // Blog sil

module.exports = router;