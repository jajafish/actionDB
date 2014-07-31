module.exports = function(app, mongoose){

    var Action = mongoose.model("Action");

    app.get("/actions/new", function(req, res){
        res.render("index", {title: "hey all"});
    });

    app.get("/actions/all", function(req, res){
        res.render("actions-all", {title: "people want to..."});
    });

    app.post("/actions/create", function(req, res){
        var actionName = req.body.actionName;
        var newAction = new Action();
        newAction.actionName = actionName;
        newAction.save(function(err, data){
            if (err){
                res.render("error", {err: err});
            }
            else {
                var id = data.id;
                res.redirect("/actions/" + id)
                console.log("hello");
            }
        })
    });

    app.get("/actions/:id", function(req, res){
        var id = req.params.id;
        Action.findOne({"_id" : id}, function(err, data){
            if (err){
                res.render("error", {err: err});
            } else {
                res.render("action-detail", {
                    actionInfo: data
                });
            }
        })
    });

}


