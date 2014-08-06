var request = require("request"),
    cheerio = require("cheerio"),
    courses = [];

request('https://www.ccsf.edu/Schedule/Fall/computer_science.shtml', function(err, resp, body){
    if(!err && resp.statusCode == 200){
        var $ = cheerio.load(body);
        $('.courseTitle', 'body').each(function(){
            var courseTitle = $(this).text();
            var descAnchor = $(this).children("a").attr('href').toString();
            var descUrl0 = descAnchor.replace("javascript:cC(", '');
            var descUrl1 = descUrl0.replace(",\'CCS\')", '');
            var descUrl2 = descUrl1.replace("\'", '');
            var courseObject = {
                title: courseTitle,
                url: descUrl2
            }
            courses.push(courseObject);
        });
        console.log(courses);
    }
});