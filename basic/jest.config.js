module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'esbuild-jest',
  },
  testEnvironment: 'miniflare',
}
