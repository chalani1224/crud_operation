const express = require('express');
const sampleController = require('../controllers/sampleController');

const SampleRouter = express.Router();

//create 
SampleRouter.post('/createSample', sampleController.createSample);

module.exports = SampleRouter;