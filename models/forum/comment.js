const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  movieId: {
    type: Number,
    required: true
  }
}, { collection: 'comments' });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;