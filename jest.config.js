module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  textMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)' // Adicione outras bibliotecas que precisam ser transformadas
  ]
}
