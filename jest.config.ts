import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts', // Inclui todos os arquivos .ts na pasta src
    '!<rootDir>/src/**/*.spec.ts', // Exclui arquivos de teste
    '!<rootDir>/src/**/*.test.ts', // Exclui arquivos de teste
    '!<rootDir>/src/**/*.d.ts', // Exclui arquivos de declaração TypeScript
    '!<rootDir>/src/**/*.mock.ts' // Exclui arquivos de mock, se existirem
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: 'ts-jest',
  testEnvironment: 'node'
}

export default config
