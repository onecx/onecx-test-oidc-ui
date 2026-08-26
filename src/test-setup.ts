import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone'
import { jest } from '@jest/globals'

setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true
})


// Mock matchMedia for responsive design features
// Mock matchMedia for responsive design features
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})