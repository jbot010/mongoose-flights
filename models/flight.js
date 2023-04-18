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
    type: Date, 
    default: function(){
      const departDate = new Date()
      departDate.setFullYear(departDate.getFullYear()+1)
      return departDate
    }  
  }, 
})

// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)



export {
  Flight
}