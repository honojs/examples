module.exports = {
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'esbuild-jest',
  },
  testEnvironment: 'miniflare',
  testEnvironmentOptions: {},
}
