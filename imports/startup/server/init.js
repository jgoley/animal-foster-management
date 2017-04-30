import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'
import Animals from '../../api/animals/index'

let animals = [
  {
    type: 'Dogs',
    fosters: []
  },
  {
    type: 'Puppies',
    fosters: []
  },
  {
    type: 'Cats',
    fosters: []
  },
  {
    type: 'Kittens',
    fosters: []
  }
]

Meteor.startup(()=>{
  if(!Animals.findOne())
    animals.forEach((animal)=>{ console.log(Animals.insert(animal))})
})
