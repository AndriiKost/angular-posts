const mongoose = require('mongoose');

// Blueprint for MongoDB
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

// Model for MongoDB
module.exports = mongoose.model('Post', postSchema);
