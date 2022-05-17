module.exports = {
  testEnvironment: 'miniflare',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
}
