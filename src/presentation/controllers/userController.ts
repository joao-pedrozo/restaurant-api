import { Request, Response } from 'express'
import UserService from '../../application/services/userService'

class UserController {
  private userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getUsers()
      res.json(users)
    } catch (error) {
      console.error('Error getting users:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id, 10)
      const user = await this.userService.getUserById(userId)

      if (user) {
        res.json(user)
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    } catch (error) {
      console.error('Error getting user by ID:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async addUser(req: Request, res: Response): Promise<void> {
    try {
      const name = req.body.name

      console.log(req.params)

      if (!name) {
        res.status(422).json({
          error: 'User name missing',
        })

        return
      }

      const user = await this.userService.addUser(name)

      res.json(user)
    } catch (error) {
      console.error('Error adding user:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export default UserController
