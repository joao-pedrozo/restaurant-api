import express, { Express } from 'express'
import helmet from 'helmet'
import userRoutes from './routes/userRoutes'

class Server {
  private app: Express

  constructor() {
    this.app = express()
    this.configMiddleware()
    this.configRoutes()
    // this.handleErrors()
  }

  private configMiddleware(): void {
    this.app.use(express.json())
    this.app.use(helmet())
  }

  private configRoutes(): void {
    this.app.use('/api', userRoutes)
  }

  // private handleErrors(): void {
  //   this.app.use(errorHandler)
  // }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  }
}

const server = new Server()

export default server
