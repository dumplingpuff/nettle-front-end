import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  trip: DS.belongsTo('trip', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
