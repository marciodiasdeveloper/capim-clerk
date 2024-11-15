import { User } from '@clerk/express'

export interface UserStore {
  store: (input: UserStore.Input) => Promise<UserStore.Output>
}

export namespace UserStore {
  export type Input = {
    externalId?: string
    emailAddress?: string[]
    phoneNumber?: string[]
    username?: string
    password?: string
    firstName?: string
    lastName?: string
    skipPasswordChecks?: boolean
    skipPasswordRequirement?: boolean
    skipLegalChecks?: boolean
    legalAcceptedAt?: Date
    totpSecret?: string
    backupCodes?: string[]
    createdAt?: Date
  }
  export type Output = undefined | User
}
