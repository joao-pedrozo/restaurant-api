import server from './presentation/server'

const port = process.env.PORT || 3000

const startServer = async () => {
  try {
    server.start(port as number)
  } catch (error) {
    console.error('Error starting server:', error)
  }
}

startServer()
