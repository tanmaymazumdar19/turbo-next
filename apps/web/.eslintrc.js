module.exports = {
  extends: ['custom/next'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    'eslint-comments/require-description': 'off',
    'import/no-default-export': 'off',
    'import/order': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-nested-ternary': 'warn',
    'react/jsx-no-useless-fragment': 'off',
  },
}
