// trip model
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  arrival: DS.attr('string'),
  departure: DS.attr('string'),
  description: DS.attr('string'),

  items: DS.attr(),
  users: DS.attr(),

  // items: DS.hasMany('item', { async: true }),
  // users: DS.hasMany('user', { async: true })
});
