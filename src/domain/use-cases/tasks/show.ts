import { TasksShow } from '@/domain/contracts/gateways'

type Setup = () => TasksShowUseCase
type Input = TasksShow.Input
type Output = TasksShow.Output

export type TasksShowUseCase = (input: Input) => Promise<Output>

export const setupTasksShowUseCase: Setup = () => async input => {
  return { success: true }
}
