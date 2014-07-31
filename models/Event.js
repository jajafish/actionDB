module.exports = function(mongoose){

    var Schema = mongoose.Schema;

    var EventSchema = new Schema({
        eventName: String,
        eventDescription: String,
        eventKeyWords: [],
        eventDate: Date,
    });
    mongoose.model("Event", EventSchema);
    
}