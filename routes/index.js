const express = require('express');
const router = express.Router();

const apiService = require('../services/APIService');
const homeService = require('../services/HomeService');

const blogPageRoute = require('./blog_page');

module.exports = () => {

    router.get('/', async (request, response) => {
        var resultJSON = await apiService.getAPI(apiService.getAllPostsAPI);
        resultJSON = homeService.homePageAPI(resultJSON);
        response.render('pages/index', { resultJSON });
    });

    router.get('/:param', async (request, response) => {
        var resultJSON = await apiService.getAPI(apiService.getPost + request.params.param);
        response.render('pages/single', { resultJSON });
    });

    /*
    **** Use below method to call APIs when making different modules for routes
    */

    // router.use('/:param', blogPageRoute(apiService));

    return router;
}