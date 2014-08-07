var request = require("request"),
    cheerio = require("cheerio"),
    courses = [];

request('https://www.ccsf.edu/Schedule/Fall/computer_science.shtml', function(err, resp, body){
    if(!err && resp.statusCode == 200){
        var $ = cheerio.load(body);
        $('.courseTitle', 'body').each(function(){

            var courseObject = {};

            var courseTitle = $(this).text();
            courseObject.title = courseTitle;
            // console.log(courseObject);

            var descAnchor = $(this).children("a").attr('href').toString();
            var descUrl0 = descAnchor.replace("javascript:cC(", '');
            var descUrl1 = descUrl0.replace(",\'CCS\')", '');
            var descUrl2 = descUrl1.replace("\'", '');
            var descUrl3 = descUrl2.replace("\\'", '');
            var descUrl4 = descUrl3.replace("\'", '');

            var sfCityCollegeURL = 'https://www.ccsf.edu/';
            var finalDescUrl = sfCityCollegeURL.concat(descUrl4);
            request(finalDescUrl, function(err, resp, body){
                if (!err && resp.statusCode == 200){
                    var $$ = cheerio.load(body);
                    $$('.description', 'body').each(function(){
                        var courseDescription = $$(this).text();
                        courseObject.description = courseDescription;
                        // console.log(courseObject);
                        courses.push(courseObject);
                        console.log(courses);
                    });
                }

            });

        });

    }
});
