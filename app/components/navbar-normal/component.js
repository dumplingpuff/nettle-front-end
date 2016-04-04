//navbar- normal component
import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
      // this.get('auth').signOut()
      // .then(() => {
      //   this.get('flashMessages')
      //   .warning('You have been signed out.');
      // })
      // .catch(() => {
      //   this.get('flashMessages').danger('Error')
      //   .danger("Sorry we couldn't sign you out.");
      // });
    }
  }
});
