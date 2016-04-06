import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      trips: this.get('store').findAll('trip'),
    };
  },
  actions: {
    destroyTrip: function(trip){
      console.log('Route Action : destroyPokemon');
      trip.destroyRecord();
    },
  }
});
