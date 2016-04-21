// invite route

import Ember from 'ember';

export default Ember.Route.extend({
  invite: Ember.inject.service(),
  actions: {
    addUser(user, id) {
      console.log('Route Action: Add User');
      console.log(user);
      return this.get('invite').addUser(user, id)
      .then(() => this.refresh())
      .then(() => console.log('success'));
      // trip.save();
      // .then(() => console.log('user added to trip'));
    },
  }
});

// return this.get('ajax').request('/posts', {
//   method: 'POST',
//   data: {
//     foo: 'bar'
//   }
// });
// }
