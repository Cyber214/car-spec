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
  Car.create(req.body)
  .then(car => {
    res.redirect(`/cars/${car._id}`)
  })
  .catch(error => {
    console.log(error)
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

function update(req, res) {
  Car.findByIdAndUpdate(req.params.carId, req.body, {new: true})
  .then(car => {
    // redirect back to show view
    res.redirect(`/cars/${req.params.carId}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/cars')
  })
}

function deleteCar(req, res) {
  Car.findByIdAndDelete(req.params.carId)
  .then(car => {
    res.redirect('/cars')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

export {
  index,
  newcar as new,
  create,
  edit,
  show,
  update,
  deleteCar as delete,
}