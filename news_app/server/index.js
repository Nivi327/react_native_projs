const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const postRouter = require('./routes/post');
const mongoConn = require('./db/index');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/post', postRouter);

mongoConn.then(() => {
    app.listen(PORT, () => {
        console.log(`DB Connected`);
    });
}).catch((err) => {
    console.log(err);
});