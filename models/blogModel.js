const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/blogs.json');

const readBlogs = () => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath);
    return JSON.parse(data || '[]');
};

const writeBlogs = (blogs) => {
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));
};

module.exports = { readBlogs, writeBlogs };