var express                 = require("express"),
    app                     = express(),
    server                  = require("http").createServer(app);

app.set('port', 3000);

server.listen(3000);

app.get("/", function(req, res){
    res.render("index");
});


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: true});
