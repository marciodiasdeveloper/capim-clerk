import { ResetPasswordConfirmStore } from '@/domain/contracts/gateways'

type Setup = () => ResetPasswordConfirmStoreUseCase
type Input = ResetPasswordConfirmStore.Input
type Output = ResetPasswordConfirmStore.Output

export type ResetPasswordConfirmStoreUseCase = (input: Input) => Promise<Output>

export const setupResetPasswordConfimStore: Setup = () => async input => {
  return { success: true }
}
