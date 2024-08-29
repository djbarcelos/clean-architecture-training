import { type AccountModel } from '../controllers/signup/signup-protocols'
import { ServerError } from '../error/server-error'
import { type HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (account: AccountModel): HttpResponse => ({
  statusCode: 200,
  body: account
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
