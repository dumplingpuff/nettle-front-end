import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return {
      trip: this.store.findRecord('trip', params.trip_id)
    };
  }
});
