const express = require('express');
const router = express.Router();

module.exports = (params) => {
    const {apiService} = params;

    router.get('/', async (request, response) => {
        const resultJSON = await apiService.getAPI(apiService.getAllPostsAPI);
        return response.render('pages/single', { resultJSON });
    });

    return router;
}