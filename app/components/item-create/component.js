import Ember from 'ember';

export default Ember.Component.extend({
  form:{},
  actions: {
    createItem (model) {
      console.log('Component action: create item');
      this.set('form.trip_id', model.id);
      this.sendAction('routeCreateItem', this.get('form'));
    },
  }
});
