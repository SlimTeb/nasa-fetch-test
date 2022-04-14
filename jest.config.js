module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "./client/**/*.{ts,js,tsx,jsx}",
    "./server/**/*.{ts,js}",
    "!**/node_modules/**",
  ],
  preset: "ts-jest/presets/js-with-ts",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
  },
  moduleNameMapper: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests",
        outputDirectory: "tests",
      },
    ],
  ],
};
