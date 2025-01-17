// Followed Jest setup guide at Gatsby's site:
// https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/#setting-up-your-environment
const { compilerOptions } = require("./tsconfig.json")
const { pathsToModuleNameMapper } = require("ts-jest/utils")
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/",
})

module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `identity-obj-proxy`,
    ...paths,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: 'jsdom',
}