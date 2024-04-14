import { Car } from "../models/car.js";


function index(req, res){
  Car.find({})
  .then(cars => {
    console.log(cars)
    res.render('cars/index', {
      cars: cars
    })  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newcar(req, res) {
  res.render('cars/new')
}

function create(req, res) {
  req.body.description = false
  Car.create(req.body)
  .then(car => {
    res.redirect('cars')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/cars')
  })
}

function edit(req, res) {
  Car.findById(req.params.carId)
  .then(car => {
    res.render('cars/edit', {
      car: car
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/cars')
  })
}


export {
  index,
  newcar as new,
  create,
  edit,
}