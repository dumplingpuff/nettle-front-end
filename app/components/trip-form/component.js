import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createTrip: function() {
      console.log('Component Action: createTrip');
      this.sendAction('routeCreateTrip', this.get('form'));
      this.set('form', {});
    }
  }
});
