import {
  setupTasksUpdateUseCase,
  TasksUpdateUseCase
} from '@/domain/use-cases'

export const makeTasksUpdateUseCase = (): TasksUpdateUseCase => {
  return setupTasksUpdateUseCase()
}
