const express = require("express");
const articleRouter = require("./routes/articles")
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/blog');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/articles', articleRouter);


app.get('/', (req, res) => {
    const articles = [{
        title: "Test Article",
        createdAt: new Date(),
        description: 'Text Description'
    },
    {
        title: "Test Article2",
        createdAt: new Date(),
        description: 'Text Description'
    }]
    res.render('articles/index', { articles: articles });
})

app.listen(3000);