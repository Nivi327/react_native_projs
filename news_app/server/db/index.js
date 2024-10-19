const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.czb6pk4.mongodb.net/news_app?retryWrites=true&w=majority`

var options = {
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const connection = mongoose.connect(URI, options);

module.exports = connection;