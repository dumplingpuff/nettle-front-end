// application route
import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    signOut() {
      this.get('auth').signOut()
        .then(() => this.transitionTo('application'))
        .then(() => this.store.unloadAll())
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.');
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Are you sure you\'re signed-in?');
        });
    },

    error(reason) {
      var unauthorized;
      if (reason.errors) {
        unauthorized = reason.errors.some((error) => {
          return error.status === "401";
        });
      }

      if (unauthorized) {
        this.get('flashMessages')
          .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },
});
