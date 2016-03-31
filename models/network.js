/**
 * Created by iTooly on 3/30/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Network = new Schema({
    owner: Schema.Types.ObjectId,
    name: String,
    type: String
});
module.exports = mongoose.model('Network', Network);