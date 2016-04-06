import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    addUser() {
      console.log('Component Action: Adding User');
      console.log(this.get('form'));
      // this.sendAction('routeAddUser', this.get('id'));
    },
  }
});
