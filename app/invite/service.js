import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  addUser(model, data) {
    return this.get('ajax').patch(`/trips/${data}/invite`, {
      data: {
        trip: {
          users: {
            id: model.id
          },
        }
      }
    });
  }
});
