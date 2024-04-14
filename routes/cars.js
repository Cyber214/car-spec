import { Router } from 'express'
import * as carsCtrl from "../controllers/cars.js"

const router = Router()

// GET localhost:3000/index
router.get("/", carsCtrl.index)

//GET localhost:3000/new
router.get("/new", carsCtrl.new)

// // GET localhost:3000/todos/:todoId
// router.get('/:carId', carsCtrl.show)

//GET localhost:3000/cars
router.post("/", carsCtrl.create)

// GET localhost:3000/todos/:todoId/edit
router.get('/:carId/edit', carsCtrl.edit)

export { router }
