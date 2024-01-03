import express from 'express'
import UserController from '../controllers/userController'
import UserService from '../../application/services/userService'

const router = express.Router()

const userService = new UserService()
const userController = new UserController(userService)

router.get('/users', userController.getAllUsers.bind(userController))
router.get('/users/:id', userController.getUserById.bind(userController))
router.post('/users', userController.addUser.bind(userController))

export default router
