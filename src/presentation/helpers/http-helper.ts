import { type HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message
})

export const success = (message: string): HttpResponse => ({
  statusCode: 200,
  body: message
})
