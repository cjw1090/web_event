const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: {type: String, trim: true, required: true},
  Category: {type:String, required:true},
  Type: {type:String, required:true},
  location: {type: String, required: true},
  startT: {type: Date, required:true},
  finishT: {type:Date, required:true},
  content: {type:String, required:true},
  OrganizerName: {type:String, required:true},
  Organizer: {type:String, required:true},
  ticket: {type:String, required: true},
  ticketPrice: {type: Number, default:0},
  tags: [String],
  numLikes: {type: Number, default: 0},
  numAnswers: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Question = mongoose.model('Question', schema);

module.exports = Question;
