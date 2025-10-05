// const { v4: uuidv4 } = require('uuid');
const { readBlogs, writeBlogs } = require('../models/blogModel');


// controllers/blogController.js
let blogs = [];
// Create Blog
exports.createBlog = (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author)
        return res.status(400).json({ message: 'All fields are required' });

    const blogs = readBlogs();
    const newBlog = { id: blogs.length + 1, title, content, author };
    blogs.push(newBlog);
    writeBlogs(blogs);

    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
};

// Get All Blogs
exports.getAllBlogs = (req, res) => {
    const blogs = readBlogs();
    res.json({ message: 'All blogs fetched successfully', blogs });
};

// Get Blog by ID
exports.getBlogById = (req, res) => {
    const blogs = readBlogs();
    const blogId = Number(req.params.id);
    const blog = blogs.find((b) => b.id === blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    res.json({ message: 'Blog fetched successfully', blog });
};

// Update Blog
exports.updateBlog = (req, res) => {
    const blogs = readBlogs();
    const blogId = Number(req.params.id);
    const blogIndex = blogs.findIndex((b) => b.id === blogId);
    if (blogIndex === -1)
        return res.status(404).json({ message: 'Blog not found' });

    const { title, content } = req.body;
    blogs[blogIndex] = { ...blogs[blogIndex], title, content };
    writeBlogs(blogs);

    res.json({ message: 'Blog updated successfully', blog: blogs[blogIndex] });
};

// Delete Blog
exports.deleteBlog = (req, res) => {
    let blogs = readBlogs();
    const blogId = Number(req.params.id);
    const blogIndex = blogs.findIndex((b) => b.id === blogId);
    if (blogIndex === -1)
        return res.status(404).json({ message: 'Blog not found' });

    blogs.splice(blogIndex, 1);
    writeBlogs(blogs);

    res.json({ message: 'Blog deleted successfully' });
};