// trip route
import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('trip', params.trip_id);
  },
  actions: {
    updateTrip: function(trip) {
      console.log('Route Action: update Trip');
      trip.save();
    }
  }
});


// return Ember.RSVP.hash({
//   trip: this.store.findRecord('trip', params.trip_id),
//   items: this.store.findAll('item')
// });
// return this.store.findAll('item');
