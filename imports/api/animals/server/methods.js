import { Meteor } from 'meteor/meteor';
import Animals from '../index'

Meteor.methods({
  setAvailability: (animal, select) => {
    let userId = Meteor.userId()
    let query = {}
    if (select) query.$pull = {'fosters': userId}
    else query.$push = {'fosters': userId}
    Animals.update(animal._id, query)
  }
})
