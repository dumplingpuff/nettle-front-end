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
      this.sendAction('routeUpdateTrip', this.get('form'));
      this.set('isEditable', false);
    },
  },
  doubleClick: function(){
    this.toggleProperty('isEditable');
  },
});
