import { MissingParamError } from '../error/missing-param-error'
import { badRequest, success } from '../helpers/http-helper'
import { type HttpRequest, type HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return success('User registered successfully')
  }
}
