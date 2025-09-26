module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/tests/mocks/fileMock.ts"
  },
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"]
};