import { User } from '../../domain/models/user'
import database from '../../infrastructure/database/database'

class UserService {
  async getUsers(): Promise<User[]> {
    return database.user.findMany()
  }

  async getUserById(userId: number): Promise<User | null> {
    return database.user.findUnique({
      where: { id: userId },
    })
  }
}

export default UserService
