// trip model
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  arrival: DS.attr('date'),
  departure: DS.attr('date'),
  description: DS.attr('string'),

  items: DS.attr(),
  users: DS.attr(),

  // items: DS.hasMany('item', { async: true }),
  // users: DS.hasMany('user', { async: true })
});
