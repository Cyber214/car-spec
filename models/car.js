import mongoose from 'mongoose'

const Schema = mongoose.Schema

const carSchema = new Schema({
  make: String,
  model: String,
  class: {type: String, enum: ['Sport', 'Coupe', 'Luxury', 'Hatchback', 'SUV']},
  description: String,
  photo: String
}, {
  timestamps: true
})

const Car = mongoose.model('Car', carSchema)

export {
  Car
}