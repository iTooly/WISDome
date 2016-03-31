/**
 * Created by iTooly on 3/30/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = {};

var Gun = new Schema({
    owner: Schema.Types.ObjectId,
    type: String,
    name: String
});

module.exports = mongoose.model('Gun', Gun);