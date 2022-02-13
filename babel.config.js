module.exports = {
  presets: [['@babel/preset-env']],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
      ],
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
