import { TasksStore } from '@/domain/contracts/gateways'

type Setup = () => TasksStoreUseCase
type Input = TasksStore.Input
type Output = TasksStore.Output

export type TasksStoreUseCase = (input: Input) => Promise<Output>

export const setupTasksStoreUseCase: Setup = () => async input => {
  return { success: true }
}
