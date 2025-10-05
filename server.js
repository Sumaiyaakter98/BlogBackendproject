const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
const logger = require('./middlewares/logger');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/api/blogs', blogRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));