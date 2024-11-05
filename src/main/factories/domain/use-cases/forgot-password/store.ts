import {
  setupForgotPasswordControllerUseCase,
  ForgotPasswordStoreUseCase
} from '@/domain/use-cases'

export const makeForgotPasswordStoreUseCase = (): ForgotPasswordStoreUseCase => {
  return setupForgotPasswordControllerUseCase()
}
