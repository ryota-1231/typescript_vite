/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/__mocks__/file.ts',
    '\\.(css|less)$': '<rootDir>/.jest/__mocks__/style.ts',
  },
  preset: 'ts-jest/presets/default-esm',
  // extensionsToTreatAsEsm: ['.ts'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest-setup.ts'],
  testMatch: ['**/src/**/(*.)+(spec|test).[jt]s?(x)'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    // 否定先読みで、指定したディレクトリ/ファイル以外をignoreの対象とさせる
    '/node_modules/(?!swiper|ssr-window|dom7).+\\.js',
  ],
};
