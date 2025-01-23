import { AuthorizationTokenValidate } from '@/domain/contracts/gateways'

// import { ValidateUser } from 'library-auth'

export class AuthenticateMiddleware implements AuthorizationTokenValidate {
  async authorizeToken (input: AuthorizationTokenValidate.Input): Promise<AuthorizationTokenValidate.Output> {
    let result
    try {
      // check valid token

      result = {
        displayName: user.displayName,
        email: user.email
      }
    } catch (error) {
      console.log(error)
    }
    return result
  }
}
