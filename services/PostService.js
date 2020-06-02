const showdown = require('showdown');

module.exports.postPageAPI = function (data) {
    converter = new showdown.Converter(),
        text = data.content,
        html = converter.makeHtml(text);
    data.content = html;

    console.log(data.content);
    console.log(html);

    return data;
}