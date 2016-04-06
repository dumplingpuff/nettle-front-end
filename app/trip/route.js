import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    // return this.store.findRecord('trip', params.trip_id);
    return Ember.RSVP.hash({
      trip: this.store.findRecord('trip', params.trip_id)
    });
  }
});
