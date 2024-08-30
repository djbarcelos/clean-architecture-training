export interface Encrypter {
  encrypt: (valid: string) => Promise<string>
}
