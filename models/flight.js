import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const Schema = mongoose.Schema
	
//TODO -> 'DEN' default via middleware
//TODO -> set departs date default to one year from date created
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    flightNo: Number,
    min: 10,
    max: 9999
  },
  departs: {
    Date: Number,
    default function(){
      return new Date().getFullYear
    },
    timestamps: true,
  }
})

// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}