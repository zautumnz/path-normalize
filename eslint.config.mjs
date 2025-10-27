import love from 'eslint-config-love'

const rulesOverrides = {
  'array-bracket-spacing': [ 'error', 'always' ],
  'comma-dangle': 'off',
  'eslint-comments/require-description': 'off',
}

love.rules = { ...love.rules, ...rulesOverrides }

export default {
  ...love,
  files: ['src/*.ts'],
}
