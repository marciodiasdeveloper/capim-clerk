import {
  setupTasksDeleteUseCase,
  TasksDeleteUseCase
} from '@/domain/use-cases'

export const makeTasksDeleteUseCase = (): TasksDeleteUseCase => {
  return setupTasksDeleteUseCase()
}
