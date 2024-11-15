import { Router } from 'express'
import { auth } from '@/main/middlewares'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { clerkMiddleware, getAuth, requireAuth } from '@clerk/express'

import {
  makeTasksListController,
  makeTasksStoreController,
  makeTasksShowController,
  makeTasksUpdateController,
  makeTasksDeleteController
} from '@/main/factories/application/controllers'

// ClerkExpressWithAuth({})
// import { clerkMiddleware } from '@clerk/express'
// requireAuth({ signInUrl: '/sign-in' })

export default (router: Router): void => {
  router.get('/tasks', requireAuth(), auth({}), adapt(makeTasksListController()))
  router.post('/tasks', requireAuth(), auth({}), adapt(makeTasksStoreController()))
  router.get('/tasks/{id}', requireAuth(), auth({}), adapt(makeTasksShowController()))
  router.put('/tasks/{id}', requireAuth(), auth({}), adapt(makeTasksUpdateController()))
  router.delete('/tasks/{id}', requireAuth(), auth({}), adapt(makeTasksDeleteController()))
}
