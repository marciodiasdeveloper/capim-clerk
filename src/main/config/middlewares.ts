import { Express, json } from 'express'
import cors from 'cors'
import compression from 'compression'
// import swaggerExpres from 'swagger-ui-express'
// import swaggerFile from '@/infra/documentation/swagger.json'
import { setupSentry } from '@/main/factories/application/middlewares/sentry'
import { clerkMiddleware } from '@clerk/express'

export const setupMiddlewares = (app: Express): void => {
  app.use(cors())
  app.use(json())
  app.use(compression())

  const options = {
    // jwtKey: 'sua-chave-jwt-personalizada',
    // apiKeyId: process.env.CLERK_API_KEY_ID,
    // publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    // secretKey: process.env.CLERK_SECRET_KEY
  }

  app.use(clerkMiddleware({ ...options }))

  setupSentry(app)
  // app.use('/api/docs', swaggerExpres.serve, swaggerExpres.setup(swaggerFile))
  app.use((req, res, next) => {
    res.type('json')
    next()
  })
}
