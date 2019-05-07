module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'styled-components',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
  ],
  env: {
    production: {
      only: ['app'],
      plugins: [
        'lodash',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
  },
};
