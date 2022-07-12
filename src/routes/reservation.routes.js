'use strict'

const reservationController = require('../controllers/reservation.controller');
const express = require('express');
const mdAuth = require('../services/authenticated');
const api = express.Router();

api.post('/addReservation/:idHotel', mdAuth.ensureAuth ,reservationController.addReservation );
api.get('/getReservations/:idHotel', mdAuth.ensureAuth, reservationController.getReservations);
api.get('/getReservation/:idHotel/:id', mdAuth.ensureAuth, reservationController.getReservation);
api.get('/myReservations/:idHotel', mdAuth.ensureAuth, reservationController.myReservations)



module.exports = api;