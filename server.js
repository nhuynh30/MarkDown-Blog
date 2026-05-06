const express = require("express");
const articleRouter = require("./routes/articles")
const app = express();
const Article = require('./models/article');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/blog');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/articles', articleRouter);


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
})

app.listen(3000);