const express = require('express');
const router = express.Router();

const blogPageRoute = require('./blog_page');

module.exports = (params) => {
    const {apiService} = params;

    router.get('/', async (request, response) => {        
        const resultJSON = await apiService.getAPI(apiService.getAllPostsAPI);
        return response.render('pages/index', { resultJSON });
    });

    router.use('/blog_page', blogPageRoute(params));

    return router;
}