import { UserStore } from '@/domain/contracts/gateways'

type Setup = () => UserStoreUseCase
type Input = UserStore.Input
type Output = UserStore.Output

export type UserStoreUseCase = (input: Input) => Promise<Output>

export const setupUserStore: Setup = () => async input => {
  return { success: true }
}
