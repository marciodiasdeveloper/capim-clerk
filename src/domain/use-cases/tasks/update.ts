import { TasksUpdate } from '@/domain/contracts/gateways'

type Setup = () => TasksUpdateUseCase
type Input = TasksUpdate.Input
type Output = TasksUpdate.Output

export type TasksUpdateUseCase = (input: Input) => Promise<Output>

export const setupTasksUpdateUseCase: Setup = () => async input => {
  return { success: true }
}
