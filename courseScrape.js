var request = require("request"),
    cheerio = require("cheerio"),
    courses = [];

request('https://www.ccsf.edu/Schedule/Fall/computer_science.shtml', function(err, resp, body){
    if(!err && resp.statusCode == 200){
        var $ = cheerio.load(body);
        $('.courseTitle', 'body').each(function(){
            var courseTitle = $(this).text();
            var descAnchor = $(this).children("a").attr('href');
            var courseObject = {
                title: courseTitle,
                url: descAnchor,
            }
            courses.push(courseObject);
            // console.log(descAnchor);
        });
        console.log(courses);
    }
});