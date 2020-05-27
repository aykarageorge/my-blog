module.exports.homePageAPI = function (data) {
    var count = 0;
    var homeData = [];
    var category = [];
    var media = [];
    data.forEach(post => {
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

            homeData.push({
                "url": post.blog_id,
                "title": post.title,
                "content": post.content.slice(0, 60),
                "posted_on": post.posted_on,
                "category": category,
                "media": media
            });
        }
    });

    return homeData;
}