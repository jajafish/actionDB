module.exports = function(mongoose){

    var Schema = mongoose.Schema;

    var ActionSchema = new Schema({
        actionName: String,
    });
    mongoose.model("Action", ActionSchema);
    
}