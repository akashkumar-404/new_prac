module.exports = {
    testEnvironment: 'jsdom', 
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest', 
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js", 
    },
  };
  