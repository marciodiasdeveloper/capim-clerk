import {
  setupTasksShowUseCase,
  TasksShowUseCase
} from '@/domain/use-cases'

export const makeTasksShowUseCase = (): TasksShowUseCase => {
  return setupTasksShowUseCase()
}
