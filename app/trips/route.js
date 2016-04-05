import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      trips: this.get('store').findAll('trip'),
    };
  }
});
