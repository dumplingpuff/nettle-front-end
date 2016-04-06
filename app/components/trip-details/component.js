import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  toggleEditable: function() {
    this.toggleProperty('isEditable');
  },
});
