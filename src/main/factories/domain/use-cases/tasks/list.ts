import {
  setupTasksListUseCase,
  TasksListUseCase
} from '@/domain/use-cases'

export const makeTasksListUseCase = (): TasksListUseCase => {
  return setupTasksListUseCase()
}
