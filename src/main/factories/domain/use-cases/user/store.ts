
import {
  setupUserStore,
  UserStoreUseCase
} from '@/domain/use-cases'

export const makeUserStoreUseCase = (): UserStoreUseCase => {
  return setupUserStore()
}
