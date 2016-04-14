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

  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
});

/**
 * Validations
 */
commentListSchema.path('title').validate(function (title) {
  return !!title;
}, 'Title cannot be blank');

commentListSchema.path('content').validate(function (content) {
  return !!content;
}, 'Content cannot be blank');

/**
 * Statics
 */
commentListSchema.statics.load = function (id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('commentList', commentListSchema);
