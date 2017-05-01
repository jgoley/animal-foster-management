import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import FosterList from '../components/fosterList'

export default createContainer(({ animal })=> {
  let query = {_id: {$in: animal.fosters}}
  Meteor.subscribe('fosters', query);
  return {
    fosters: Meteor.users.find(query).fetch()
  }
}, FosterList)
