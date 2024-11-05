import {
  setupLoginStore,
  UserStoreUseCase
} from '@/domain/use-cases'

export const makeForgotPasswordStoreUseCase = (): UserStoreUseCase => {
  return setupLoginStore()
}
