const showdown = require('showdown');

module.exports.homePageAPI = function (data) {
    var count = 0;
    var homeData = [];
    data.forEach(post => {
        var category = [];
        var media = [];
        if (post.is_live && count < 6) {
            count++;

            post.categories.forEach(cat => {
                category.push(cat.category);
            });

            post.media.forEach(element => {
                media.push({
                    "url": element.url,
                    "name": element.name,
                    "alt_text": element.alternativeText,
                    "caption": element.caption,
                    "type": element.mime
                });
            });


            converter = new showdown.Converter(),
                text = post.content.slice(0, 60),
                html = converter.makeHtml(text);
            homeData.push({
                "url": post.blog_id,
                "title": post.title,
                "content": html,
                "posted_on": post.posted_on,
                "category": category,
                "headmast_url": post.head_media.url,
                "media": media
            });
        }
    });

    return homeData;
}