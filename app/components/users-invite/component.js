// invite users component

import Ember from 'ember';

export default Ember.Component.extend({
  trip:{},
  actions: {
    addUser(user) {
      console.log('Component action: AddUser');
      this.set('trip.user', user);
      this.sendAction('routeAddUser', this.get('trip'));
    }
  }
});
