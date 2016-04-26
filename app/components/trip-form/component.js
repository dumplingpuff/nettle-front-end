import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createTrip: function() {
      console.log('Component Action: createTrip');
      console.log('This is the form');
      // console.log(this.get('form'));
      this.set('form.arrival', new Date(this.get('arrival')));
      this.set('form.arrival', new Date(this.get('departure')));
      console.log(this.get('form'));
      this.sendAction('routeCreateTrip', this.get('form'));
      this.set('form', {});
    }
  }
});
