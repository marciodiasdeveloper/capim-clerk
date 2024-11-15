import { UserStore } from '@/domain/contracts/gateways'
import { createClerkClient, User } from '@clerk/express'

type Setup = () => UserStoreUseCase
type Input = UserStore.Input
type Output = UserStore.Output

export type UserStoreUseCase = (input: Input) => Promise<Output>

export const setupUserStore: Setup = () => async input => {
  const { firstName, lastName, emailAddress, password } = input

  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    apiUrl: 'https://api.clerk.com',
    apiVersion: 'v1'
    // jwtKey: JWT_KEY,
    // userAgent: `${PACKAGE_NAME}@${PACKAGE_VERSION}`,
    // sdkMetadata: SDK_METADATA
  })
  const response: User = await clerkClient.users.createUser({
    firstName,
    lastName,
    emailAddress,
    password
  })

  console.log(response)

  return response
}
