module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  printWidth: 120,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  importOrder: ['^@lib/(.*)$', '^@components/(.*)$', '^~/(.*)$', '^[./]'],
  importOrderSeparation: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    'prettier-plugin-tailwindcss',
  ],
}
