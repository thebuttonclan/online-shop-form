module.exports = {
  modulePaths: ['.'],
  moduleNameMapper: { '^.+\\.(css|less)$': '<rootDir>/tests/CSSStub.js' },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/backend/', '<rootDir>/cypress/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['<rootDir>/node_modules/babel-jest', { configFile: './babel.config.test.json' }],
  },
};
