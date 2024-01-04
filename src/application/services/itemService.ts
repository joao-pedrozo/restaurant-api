import { Item } from '../../domain/models/item'
import database from '../../infrastructure/database/database'

class ItemService {
  async getItems(): Promise<Item[]> {
    return database.item.findMany()
  }

  async getItemById(itemId: number): Promise<Item | null> {
    return database.item.findUnique({
      where: { id: itemId },
    })
  }

  async addItem({
    name,
    price,
    description,
  }: Pick<Item, 'name' | 'description' | 'price'>) {
    return database.item.create({
      data: {
        name,
        price,
        description,
      },
    })
  }
}

export default ItemService
