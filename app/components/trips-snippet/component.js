// trips component
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyTrip: function(){
      console.log('Component Action : destroyTrip');
      this.sendAction('routeDestroyTrip', this.get('trip'));
    },
  },
});
