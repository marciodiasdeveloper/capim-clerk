export function ClerkCreateOrganizationGateway (): any {
  return {
    async create () {
      return {
        id: 'organization-id',
        name: 'organization-name'
      }
    }
  }
}
