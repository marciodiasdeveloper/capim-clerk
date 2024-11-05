import { TasksDelete } from '@/domain/contracts/gateways'

type Setup = () => TasksDeleteUseCase
type Input = TasksDelete.Input
type Output = TasksDelete.Output

export type TasksDeleteUseCase = (input: Input) => Promise<Output>

export const setupTasksDeleteUseCase: Setup = () => async input => {
  return { success: true }
}
