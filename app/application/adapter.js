import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  auth: Ember.inject.service(),
  host: 'https://floating-temple-20684.herokuapp.com',
  headers: Ember.computed('auth.credentials.token', {
    get() {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers['Authorization'] = `Token token=${token}`;
      }
      return headers;
    }
  })
});
