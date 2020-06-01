const fetch = require("node-fetch");

let getAllPostsAPI = 'http://localhost:1337/posts?_sort=posted_on:DESC';
let getPost = 'http://localhost:1337/posts?blog_id=';

async function getCount(url) {
    const response = await fetch(url + '/count');
    return response;
}

async function getAPI(url) {
    console.log("Calling API: " + url);
    const response = await fetch(url);
    const myJson = await response.json();
    console.log(myJson);
    return myJson;
}
module.exports.getAPI = getAPI;
module.exports.getCount = getCount;

module.exports.getAllPostsAPI = getAllPostsAPI;
module.exports.getPost = getPost