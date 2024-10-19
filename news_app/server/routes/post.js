const Router = require('express').Router();
const multer = require('../middlewares/multer');
const { createPost } = require('./../controllers/post');
const { postValidator, validate } = require('./../middlewares/postMiddleware');

Router.post(
    '/create',
    multer.single('thumbnail'),
    (req, res, next) => {
        const {tags} = req.body;
        if(tags) {
            req.body.tags = JSON.parse(tags);
        }
        next();
    },
    postValidator,
    validate,
    createPost
);

Router.post('/latest');

module.exports = Router;