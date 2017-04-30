import { Meteor } from 'meteor/meteor';
import Animals from '../index'

Meteor.publish('animals', ()=> {
  return Animals.find()
})
