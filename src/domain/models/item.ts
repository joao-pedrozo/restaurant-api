import { Order } from '@prisma/client'

export interface Item {
  id: number
  name: string
  description: string
  price: number
  orders: Order[]
  createdAt: Date
  updatedAt: Date
}
