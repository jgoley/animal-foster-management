import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Animals from '../../api/animals/index';
import FosterLists from '../components/fosterLists'

export default createContainer(({ params })=> {
  let query = params.query || {}
  Meteor.subscribe('animals')
  return {
    animals: Animals.find().fetch()
  }
}, FosterLists)
