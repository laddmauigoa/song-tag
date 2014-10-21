var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Artist', {
  name: { type: String },
  bio: { type: String },
  genres: [{ type: String, unique: true}],
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
});
