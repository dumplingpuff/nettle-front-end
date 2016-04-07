import Ember from 'ember';

export default Ember.Component.extend({
  form:{},
  actions: {
    createItem () {
      console.log('Component action: create item');
      this.sendAction('routeCreateItem', this.get('form'));
    },
  }
});
