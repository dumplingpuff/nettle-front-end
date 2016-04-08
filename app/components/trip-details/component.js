import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,

  actions: {
    toggleEditable: function() {
      this.toggleProperty('isEditable');
    },
    updateTrip: function(){
      console.log('Component Action : updateTrip');
      this.sendAction('routeUpdateTrip', this.get('trip'));
      this.set('isEditable', false);
    },
  },
  doubleClick: function(){
    this.toggleProperty('isEditable');
  },
});
