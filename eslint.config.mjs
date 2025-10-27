import love from 'eslint-config-love'

const rulesOverrides = {
  // 'array-bracket-spacing': [ 'error', 'always' ],
  // '@typescript-eslint/no-confusing-void-expression': 'off',
  // 'comma-dangle': 'off',
  // '@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
  // '@typescript-eslint/strict-boolean-expressions': 'off',
}

love.rules = { ...love.rules, ...rulesOverrides }

export default {
  ...love,
  files: ['src/*.ts'],
}
