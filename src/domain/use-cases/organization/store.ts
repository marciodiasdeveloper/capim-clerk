import { UserStore } from '@/domain/contracts/gateways'
import { env } from '@/main/config'
import { createClerkClient } from '@clerk/backend'

type Setup = () => UserStoreUseCase
type Input = UserStore.Input
type Output = UserStore.Output

export type UserStoreUseCase = (input: Input) => Promise<Output>

export const setupUserStore: Setup = () => async input => {
  const clerkClient = createClerkClient({ secretKey: env.clerk.secretKey })

  const organization = await clerkClient.organizations.createOrganization({
    name: '',
    createdBy: '',
    slug: '',
    publicMetadata: {},
    privateMetadata: {},
    maxAllowedMemberships: 100
  })

  return organization
}
