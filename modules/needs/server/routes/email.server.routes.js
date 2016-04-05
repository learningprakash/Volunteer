'use strict';

var email = require('../controllers/email.server.controller'),
  needs = require('../controllers/needs.server.controller');

module.exports = function(app) {
  app.route('/email')
  .post(email.create);
  app.param('needId', needs.needByID);
};
/*
var needsPolicy = require('../policies/needs.server.policy'),
  needs = require('../controllers/needs.server.controller');

module.exports = function(app) {
  // Needs Routes
  app.route('/api/needs').all(needsPolicy.isAllowed)
    .get(needs.list)
    .post(needs.create);

  app.route('/api/needs/:needId').all(needsPolicy.isAllowed)
    .get(needs.read)
    .put(needs.update)
    .delete(needs.delete);

  // Finish by binding the Need middleware
  app.param('needId', needs.needByID);
}; */
