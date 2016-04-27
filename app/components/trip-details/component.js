import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  form: {},
  actions: {
    toggleEditable: function() {
      this.toggleProperty('isEditable');
    },
    updateTrip: function(){
      console.log('Component Action : updateTrip');
      this.set('form.arrival', this.get('arrival'));
      this.set('form.departure', this.get('departure'));
      this.set('form', this.get('trip'));
      this.sendAction('routeUpdateTrip', this.get('form'));
      this.set('isEditable', false);
    },
  },
  doubleClick: function(){
    this.toggleProperty('isEditable');
  },
});
