import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/// GET

//GET /flights
router.get('/', flightsCtrl.index)

//GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /flights/:flightId
router.get('/:flightId', flightsCtrl.show)

// GET /flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)

/// POST

//POST /flights
router.post('/', flightsCtrl.create)

//POST /flights/:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.createTicket)

router.post('/:flightId/meals', flightsCtrl.addToFlight)

/// DELETE

// DELETE /flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)

/// PUT

// PUT /flights/:flightId
router.put('/:flightId', flightsCtrl.update)

export { 
  router 
}