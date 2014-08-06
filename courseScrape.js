var request = require("request"),
    cheerio = require("cheerio"),
    courses = [];

request('https://www.ccsf.edu/Schedule/Fall/computer_science.shtml', function(err, resp, body){
    if(!err && resp.statusCode == 200){
        var $ = cheerio.load(body);
        $('.courseTitle', 'body').each(function(){
            var course = $(this).text();
            courses.push(course);
        });
        console.log(courses);
    }
});