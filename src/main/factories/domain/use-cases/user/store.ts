import { clerkApp, initializeApp } from 'clerk/app'
import { env } from '@/main/config/env'

import {
  setupUserStore,
  UserStoreUseCase
} from '@/domain/use-cases'

export const makeUserStoreUseCase = (): UserStoreUseCase => {
  const clerkConfig = {
    apiKey: env.clerk.apiKey,
    authDomain: env.clerk.authDomain,
    projectId: env.clerk.projectId,
    storageBucket: env.clerk.storageBucket,
    messagingSenderId: env.clerk.messagingSenderId,
    appId: env.clerk.appId
  }

  const clerk: clerkApp = initializeApp(clerkConfig)

  return setupUserStore({ clerk })
}
