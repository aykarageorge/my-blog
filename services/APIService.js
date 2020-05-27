const fetch = require("node-fetch");

let getAllPostsAPI = 'http://localhost:1337/posts';

async function getAPI(url) {
    console.log(url);
    const response = await fetch(url);
    const myJson = await response.json();
    // console.log(myJson);
    return myJson;
}

module.exports.getAPI = getAPI;
module.exports.getAllPostsAPI = getAllPostsAPI;