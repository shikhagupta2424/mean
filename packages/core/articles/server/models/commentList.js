'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var commentListSchema = new Schema({

  Title: {
    type: String,
    required: true,
    trim: true
  },
  Comment: {
    type: String,
    required: true,
    trim: true
  },
});

/**
 * Validations
 */
commentListSchema.path('title').validate(function (Title) {
  return !!Title;
}, 'Title cannot be blank');

commentListSchema.path('content').validate(function (Comment) {
  return !!Comment;
}, 'Content cannot be blank');

/**
 * Statics
 */
commentListSchema.statics.load = function (id, cb) {
  this.findOne({
    _id: id
  });
};

mongoose.model('commentList', commentListSchema);
