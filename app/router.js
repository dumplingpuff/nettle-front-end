// router
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('trips');
  this.route('trip', {path: '/trips/:trip_id'}, function() {
    this.route('items');
  });
  this.route('trip-create');
});

export default Router;
