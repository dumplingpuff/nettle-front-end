// invite users component

import Ember from 'ember';

export default Ember.Component.extend({
  trip:{},
  actions: {
    addUser(user, id) {
      console.log('Component action: AddUser');
      console.log(user);
      console.log("this is a trip id " + id);
      this.set('trip.users', user);
      this.sendAction('routeAddUser', user, id);
    }
  }
});
