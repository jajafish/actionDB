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
            // console.log(parsedData);

            var events = parsedData.events;
            // console.log(events);

            var oneEvent = events[3];
            // console.log(oneEvent);
            var actualEventTitle = oneEvent["event"].title;
            console.log(actualEventTitle);


            // console.log(oneEventTitle);




            // var events = parsedData.events;

            //     for (var event in events){

            //     var eventName = event[title];
            //     var newEvent = new Action();
            //     newAction.eventName = eventName;
            //     newAction.save(function(err, data){
            //         if (err){
            //             res.render("error", {err: err});
            //         }
            //         else {
            //             var id = data.id;
            //             console.log(newEvent);
            //             res.render("events", {
            //                 title: "all events",
            //                 event: event
            //             });
            //         }
            //     });

            }

        );


    });

};