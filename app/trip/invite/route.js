import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  actions: {
    addUser(user) {
      console.log('Route Action: Add User');
      
    },
  }
});
