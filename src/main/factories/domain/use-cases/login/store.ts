import {
  setupLoginStore,
  LoginStoreUseCase
} from '@/domain/use-cases'

export const makeLoginStoreUseCase = (): LoginStoreUseCase => {
  return setupLoginStore()
}
