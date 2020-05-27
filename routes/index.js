const express = require('express');
const router = express.Router();

const apiService = require('../services/APIService');
const homeService = require('../services/HomeService');

const blogPageRoute = require('./blog_page');

module.exports = () => {

    router.get('/', async (request, response) => {
        var resultJSON = await apiService.getAPI(apiService.getAllPostsAPI);
        resultJSON = homeService.homePageAPI(resultJSON);
        return response.render('pages/index', { resultJSON });
    });

    router.use('/blog_page', blogPageRoute(apiService));

    return router;
}