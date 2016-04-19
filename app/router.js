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
  this.route('trip', {path: '/trips/:trip_id'});
  this.route('trip-create');
  this.route('invite');
});

export default Router;
