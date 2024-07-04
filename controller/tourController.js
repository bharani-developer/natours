const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or Price'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
};

exports.getTour = (req, res) => {
  const id = parseInt(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
};

exports.updateTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Tour not found'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tourIndex = tours.findIndex((el) => el.id === id);

  res.status(204).json({
    status: 'success',
    data: null
  });
};
