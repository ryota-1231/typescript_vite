module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx', '**/*.ts'],
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        'selector-max-type': 1,
        'selector-max-combinators': 1,
        'selector-max-class': 0,
        'value-keyword-case': [
          'lower',
          {
            ignoreKeywords: [/.*/],
            ignoreProperties: [/.*/],
            ignoreFunctions: [/.*/],
          },
        ],
        'function-name-case': [
          'lower',
          {
            ignoreFunctions: [/.*/],
          },
        ],
      },
    },
  ],
};
