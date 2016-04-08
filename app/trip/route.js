// trip route
import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('trip', params.trip_id);
  },
  item:{},
  actions: {
    updateTrip: function(trip) {
      console.log('Route Action: update Trip');
      trip.save();
    },
    createItem(item) {
      // console.log(model);
      // console.log(this.get('trip'));
      console.log('Route Action: create item');
      this.store.createRecord('item', item)
        .save().then(()  => console.log('record created'));
      // model.items.pushObject(newItem);
    }
  }
});


// return Ember.RSVP.hash({
//   trip: this.store.findRecord('trip', params.trip_id),
//   items: this.store.findAll('item')
// });
// return this.store.findAll('item');
// model.items.push
