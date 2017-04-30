import { Meteor } from 'meteor/meteor';

Meteor.publish('fosters', (query)=> {
  query = query || {}
  return Meteor.users.find(query)
})
