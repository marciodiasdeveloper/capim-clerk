import { LoginStore } from '@/domain/contracts/gateways'

type Setup = () => LoginStoreUseCase
type Input = LoginStore.Input
type Output = LoginStore.Output

export type LoginStoreUseCase = (input: Input) => Promise<Output>

export const setupLoginStore: Setup = () => async input => {
  return { success: true }
}
