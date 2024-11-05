import {
  setupTasksStoreUseCase,
  TasksStoreUseCase
} from '@/domain/use-cases'

export const makeTasksStoreUseCase = (): TasksStoreUseCase => {
  return setupTasksStoreUseCase()
}
