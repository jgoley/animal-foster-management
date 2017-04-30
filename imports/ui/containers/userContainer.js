import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export default createContainer(({ params })=> {
  let query = params.query || {}
  Meteor.subscribe('usersWilling', query);
  return {
    fosters: Meteor.users.find(query).fetch()
  }
}, )
