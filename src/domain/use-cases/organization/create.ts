import { UserStore } from '@/domain/contracts/gateways'
import { env } from '@/main/config'
import { createClerkClient } from '@clerk/backend'

type Setup = () => CreateOrganizationUseCase
type Input = UserStore.Input
type Output = UserStore.Output

export type CreateOrganizationUseCase = (input: Input) => Promise<Output>

export const setupCreateOrganizationUseCase: Setup = () => async input => {
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
