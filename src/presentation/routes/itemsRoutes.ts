import express from 'express'
import ItemController from '../controllers/itemsController'
import ItemService from '../../application/services/itemService'

const router = express.Router()

const itemService = new ItemService()
const itemController = new ItemController(itemService)

router.get('/items', itemController.getAllItems.bind(itemController))
router.get('/items/:id', itemController.getItemById.bind(itemController))
router.post('/items', itemController.addItem.bind(itemController))

export default router
