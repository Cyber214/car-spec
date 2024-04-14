import { Car } from "../models/car.js";

function index(req, res) {
  Car.find({})
  .then(cars => {
    console.log(cars)
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

export {
  index,
  newCar as new,
}