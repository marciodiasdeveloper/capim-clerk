import { TasksList } from '@/domain/contracts/gateways'

type Setup = (clerk: any) => TasksListUseCase
type Input = TasksList.Input
type Output = TasksList.Output

export type TasksListUseCase = (input: Input) => Promise<Output>

export const setupTasksListUseCase: Setup = () => async input => {
  return { success: true }
}
