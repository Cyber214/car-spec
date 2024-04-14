import { Car } from "../models/car.js";

function index(req, res) {
  Car.find({})
  .then(cars => {
    res.render("cars/index", {
      cars: cars
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newCar(req, res) {
  res.render('cars/new')
}

function create(req, res) {
  req.body.description = req.body.description.split(', ')
  Car.create(req.body)
  .then(car => {
    res.redirect('/cars')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/cars')
  })
}

function show(req, res) {
  Car.findById(req.params.carId)
  .then(car => {
    res.render('cars/show', {
      car: car
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/cars')
  })
}

export {
  index,
  newCar as new,
  create,
  show,
}