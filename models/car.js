import mongoose from 'mongoose'

const Schema = mongoose.Schema

const carSchema = new Schema({
  make: String,
  model: String,
  type: {type: String, enum: ['Sport', 'Coupe', 'Luxury', 'Hatchback', 'SUV', 'SUV Coupe', 'Sedan']},
  description: String,
  color: {type: String, enum: ['White', 'Black', 'Red', 'Yellow', 'Green', 'Blue']},
  photo: String
}, {
  timestamps: true
})

const Car = mongoose.model('Car', carSchema)

export {
  Car
}