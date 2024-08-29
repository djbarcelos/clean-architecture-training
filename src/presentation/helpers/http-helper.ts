import { ServerError } from '../error/server-error'
import { type HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const success = (message: string): HttpResponse => ({
  statusCode: 200,
  body: message
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
