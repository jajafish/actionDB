module.exports = function(app, mongoose){

    app.get("/events/all", function(req, res){

        request({
            uri: "https://www.eventbrite.com/json/event_search?app_key=R3DQQXPXBTSMUWVNOV",
            method: "GET",
            timeout: 10000,
            followRedirect: true,
            maxRedirects: 10,
        }, function(error, response, body){
            var parsedData = JSON.parse(body);
            var events = parsedData.events;


            for (i = 0; i < events.length; i++){
                event = events[5].event;
            }

            res.render("events", {
                title: "all events",
                event: event

            });
        });


    });

};