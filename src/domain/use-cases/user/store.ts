import { UserStore } from '@/domain/contracts/gateways'
import { clerkClient } from '@clerk/express'

type Setup = () => UserStoreUseCase
type Input = UserStore.Input
type Output = UserStore.Output

export type UserStoreUseCase = (input: Input) => Promise<Output>

export const setupUserStore: Setup = () => async input => {
  const { firstName, lastName, emailAddress, password } = input

  const response = await clerkClient.users.createUser({
    firstName,
    lastName,
    emailAddress,
    password
  })

  return response
}
