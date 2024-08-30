import validator from 'validator'
import { EmailValidatorAdapter } from './email-validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const email = 'invalid_email@email.com'
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid(email)
    expect(isValid).toBe(false)
  })

  test('Should return true if validator returns true', () => {
    const email = 'valid_email@email.com'
    const sut = makeSut()
    const isValid = sut.isValid(email)
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const email = 'any_email@email.com'
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid(email)
    expect(isEmailSpy).toHaveBeenCalledWith(email)
  })
})
