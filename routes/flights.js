import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

//GET /flights/new
router.get('/new', flightsCtrl.new)

//POST /flights
router.post('/', flightsCtrl.create)

//GET /flights
router.get('/', flightsCtrl.index)

// DELETE /flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)

// GET /flights/:flightId
router.get('/:flightId', flightsCtrl.show) 

export { 
  router 
}