import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Animals from '../../api/animals/index';
import AnimalList from '../components/animalList'

export default createContainer(({ params })=> {
  let query = params.query || {}
  Meteor.subscribe('animals', query);
  return {
    animals: Animals.find().fetch()
  }
}, AnimalList)
