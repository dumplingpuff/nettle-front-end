// create trip route

import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      users: this.get('store').findAll('user'),
    };
  },
  userAll:{},
  actions: {
    createTrip: function(properties){
      console.log('Route Action : createTrip');
      this.store.createRecord('trip', properties)
        .save().then((trip) =>
          console.log('test'))
          // trip.get('users').addObject(this.get('userAll')))
        .then(()=>console.log('record created'))
        .then(() => this.store.unloadAll());
      this.transitionTo('trips');
    },
  }
});
