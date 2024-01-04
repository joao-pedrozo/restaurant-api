import { Request, Response } from 'express'
import ItemService from '../../application/services/itemService'
import { BaseControllerImpl, ValidationFailedError } from './baseController'

class UserController extends BaseControllerImpl {
  private itemService: ItemService

  constructor(itemService: ItemService) {
    super()
    this.itemService = itemService
  }

  async getAllItems(req: Request, res: Response): Promise<void> {
    try {
      const items = await this.itemService.getItems()
      res.json(items)
    } catch (error) {
      console.error('Error getting items:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async getItemById(req: Request, res: Response): Promise<void> {
    try {
      const itemId = parseInt(req.params.id, 10)
      const item = await this.itemService.getItemById(itemId)

      if (item) {
        res.json(item)
      } else {
        res.status(404).json({ error: 'Item not found' })
      }
    } catch (error) {
      console.error('Error getting item by ID:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async addItem(req: Request, res: Response): Promise<Response> {
    console.log(123)

    try {
      this.validateRequiredFields(['name', 'description', 'price'], req.body)

      const { name, description, price } = req.body

      const item = await this.itemService.addItem({
        name,
        description,
        price,
      })

      return res.json(item)
    } catch (error) {
      if (error instanceof ValidationFailedError) {
        return res.status(422).json({ error: error.message })
      } else {
        return res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }
}

export default UserController
