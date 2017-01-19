module.exports = {
    env: {
        commonjs: true,
    },
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
        'camelcase': 0,
        'consistent-return': 1,
        'global-strict': 0,
        'max-len': [2, 120, 4, {
            "ignorePattern": "^(import\\s.+)|(\\s*(var\\s.+=\\s*)?require\\s*\\(.+)$|(jest.(un)?mock\\()"
        }],
        'new-cap': 1,
        'no-alert': 2,
        'no-console': 2,
        'no-constant-condition': 1,
        'no-empty': 1,
        'no-eq-null': 0,
        'no-duplicate-imports': 0,
        'no-extend-native': 0,
        'no-multi-spaces': 0,
        'no-octal-escape': 0,
        'no-process-exit': 2,
        'no-script-url': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
        'quotes': [2, 'single'],
        'pinterest/sort-imports': ['error', {
            'ignoreCase': true,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple']
        }],
        // TODO: these are disabled failing AirBnb rules. Fix and enable.
        // Make sure to delete them in .eslintrc.json files
        'generator-star-spacing': 0,
        'import/no-extraneous-dependencies': 0,
        'import/imports-first': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'func-names': 0,
        'brace-style': 1,
        'arrow-parens': 1,
        // autofixer breaks code
        'prefer-template': 0,
        'no-else-return': 0,
        'newline-per-chained-call': 0,
        'no-unneeded-ternary': 0,
        'no-unreachable': 1,
        'no-redeclare': 1,
        'no-throw-literal': 0,
        'no-return-assign': 1,
        'vars-on-top': 0,
        'class-methods-use-this': 0,
        'arrow-body-style': 1,
        'no-multi-str': 1,
        'default-case': 1,
        'no-mixed-operators': 0,
        'no-bitwise': 1,
        'no-confusing-arrow': 1,
        'no-case-declarations': 1,
        'no-prototype-builtins': 1,
        'object-property-newline': 1,
        'no-param-reassign': 0,
        'global-require': 0,
        'import/no-dynamic-require': 1,
        'no-extra-boolean-cast': 0,
        'no-restricted-syntax': 0,
        'one-var': 0,
        'no-unsafe-finally': 0,
        'no-useless-escape': 0,
        'no-continue': 1,
        'guard-for-in': 0,
        'no-inner-declarations': 1,
        'react/jsx-no-bind': 1,
        'react/no-unused-prop-types': 0,
        'react/no-find-dom-node': 0,
        'react/jsx-filename-extension': 0,
        'array-callback-return': 1,
        'no-nested-ternary': 1,
        'no-new': 1,
        'no-useless-constructor': 1,
        'react/forbid-prop-types': 1,
        'no-useless-concat': 1,
        'import/prefer-default-export': 1,
        'no-template-curly-in-string': 1,
    }
};
