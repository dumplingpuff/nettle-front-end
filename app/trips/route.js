import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      trips: this.store.findAll('trip')
    };
  },
  actions: {
    
  }
});
