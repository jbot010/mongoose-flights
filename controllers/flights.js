import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({})
  .then(flights => {
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

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight",
  })
} 

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
    console.log(flight)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights/new')
  })
}

function show(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/show', { 
      title: 'Flight Detail', 
      flight: flight,
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function edit(req, res) {
  console.log("THIS WORKS")
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/edit', {
      flight,
      title: "Edit Flight"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.flightId, req.body, { new: true })
  .then(flight => {
    // flight will be the NEWLY updated flight, instead of the old one
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
}