import { ForgotPasswordStore } from '@/domain/contracts/gateways'

type Setup = () => ForgotPasswordStoreUseCase
type Input = ForgotPasswordStore.Input
type Output = ForgotPasswordStore.Output

export type ForgotPasswordStoreUseCase = (input: Input) => Promise<Output>

export const setupForgotPasswordControllerUseCase: Setup = () => async input => {
  return { success: true }
}
