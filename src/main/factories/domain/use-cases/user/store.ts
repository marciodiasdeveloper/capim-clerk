import { clerkApp, initializeApp } from 'clerk/app'
import { env } from '@/main/config/env'

import {
  setupUserStore,
  UserStoreUseCase
} from '@/domain/use-cases'

export const makeUserStoreUseCase = (): UserStoreUseCase => {
  const clerk = new Clerk({
    apiKey: process.env.CLERK_API_KEY // Certifique-se de definir a variável de ambiente CLERK_API_KEY
  })

  return setupUserStore({ clerk })
}
