// trip model
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  arrival: DS.attr('date'),
  departure: DS.attr('date'),
  description: DS.attr('string'),

  items: DS.hasMany('item', { async: true }),
  users: DS.hasMany('user', { async: true })
});

// t.string :title, null: false
// t.string :location, null: false
// t.date :arrival
// t.date :departure
// t.text :description
//
// t.timestamps null: false
