/* eslint-disable */
module.exports = {
    rootDir: "./",
    roots: ["<rootDir>"],
    verbose: true,
    testURL: "http://localhost/",
    transform: {
        "^.+\\.(t|j)sx?$": "babel-jest",
    },
    timers: "fake",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["<rootDir>/testConfiguration/jest.setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!(itsf-ui-common))"],
    moduleDirectories: ["node_modules", "testConfiguration"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/testConfiguration/jestFileMock.ts",
        "@common(.*)$": "<rootDir>/src/common/$1",
        "@utils(.*)$": "<rootDir>/src/utils/$1",
        "@features(.*)$": "<rootDir>/src/features/$1",
        "@pages(.*)$": "<rootDir>/src/pages/$1",
        "@mappers(.*)$": "<rootDir>/src/mappers/$1",
        "@static(.*)$": "<rootDir>/src/static/$1",
        "@context(.*)$": "<rootDir>/src/context/$1",
        "@hooks(.*)$": "<rootDir>/src/hooks/$1",
        "@translations(.*)$": "<rootDir>/src/translations/$1",
        "@constants$": "<rootDir>/src/constants.ts",
        "@appRoutes$": "<rootDir>/src/appRoutes.ts",
        "@api-routes(.*)$": "<rootDir>/src/apiRoutes/$1",
    },
    testTimeout: 5000,
    testEnvironment: "jsdom",
};
