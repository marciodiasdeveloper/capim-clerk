import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { CreateOrganization, Validator } from '@/domain/contracts/gateways'
import { CreateOrganizationUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = CreateOrganization.Input
type Model = Error | CreateOrganization.Output

export class CreateOrganizationController extends Controller {
  constructor (private readonly store: CreateOrganizationUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    const data = await this.store(input)
    return ok(data)
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.name, fieldName: 'name' }).required().build()
    ]
  }
}
