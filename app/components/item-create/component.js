import Ember from 'ember';

export default Ember.Component.extend({
  form:{},
  actions: {
    createItem (model) {
      console.log('Component action: create item');
      console.log(model.id);
      console.log(this.get('form'));
      this.set('form.trip', model);
      this.sendAction('routeCreateItem', this.get('form'));
    },
  }
});
