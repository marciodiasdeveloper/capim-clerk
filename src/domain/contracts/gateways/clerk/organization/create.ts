import { User } from '@clerk/express'

export interface CreateOrganization {
  create: (input: CreateOrganization.Input) => Promise<CreateOrganization.Output>
}

export namespace CreateOrganization {
  export type Input = {
    name: string
    slug: string
    createdBy?: string
    publicMetadata?: object
    privateMetadata?: object
    maxAllowedMemberships?: number
  }
  export type Output = undefined | User
}
