import { app, port } from './presentation/server'

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    console.error('Error starting server:', error)
  }
}

startServer()
