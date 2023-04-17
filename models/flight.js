import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
//TODO -> set departs date default to one year from date created
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    Date: { type: Date,
    default: function(){
      return new Date().getFullYear()
    }
    },
  }, 
})

// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}