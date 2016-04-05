'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Need Schema
 */
var NeedSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Need name',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please provide a description',
    trim: true
  },
  organization: {
    type: String,
    default: '',
    trim: true
  },
  location: {
    type: String,
    default: '',
    trim: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  numberNeeded: {
    type: Number,
    default: 1
  },
  volunteers: [
    { user: Schema.ObjectId }
  ],
  createdOn: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  isActive: {
    type: Boolean,
    default: true
  }

});

mongoose.model('Need', NeedSchema);
