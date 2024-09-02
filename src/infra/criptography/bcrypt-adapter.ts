import bcrypt from 'bcrypt'
import { type Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (valid: string): Promise<string | null> {
    await bcrypt.hash(valid, this.salt)
    return null
  }
}
