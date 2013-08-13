/*
 * client/js/modules/nav/show/controller.js
 */

/* global app */

'use strict';

var views = require('./views');

var Controller = app.lib.Backbone.Marionette.Controller.extend({
  initialize: function () {
    this.show(new views.NavView());
  }
});

// Public API
exports = module.exports = Controller;
