import { Flight } from "../models/flight.js"

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
    console.log(flight)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flight => {
    console.log(flights);
    res.render('flights/index', {
      flights: flights,
      title: "All Flights",
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create,
}