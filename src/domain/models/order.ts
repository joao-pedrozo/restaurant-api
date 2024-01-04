import { Item, User } from '@prisma/client'

export interface Order {
  id: number
  name: string
  client: User
  clientId: number
  items: Item[]
  createdAt: Date
  updatedAt: Date
}
