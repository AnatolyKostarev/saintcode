module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': ['warn', { custom: 'ignore' }],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': ['warn', { allow: 'none' }],
    'no-unused-vars': 'warn',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    semi: ['warn', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/img-redundant-alt': 'off',
    'linebreak-style': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'no-confusing-arrow': ['warn', { onlyOneSimpleParam: true }],
    'max-len': ['warn', { ignoreComments: true, code: 500 }],
    'default-case': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        allowExpressionValues: true,
      },
    ],
    'import/extensions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'no-unused-expressions': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-multi-str': 'warn',

  },
}
