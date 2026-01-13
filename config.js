module.exports = {
  source: ["*.tokens.json"],
  platforms: {
    web: {
      transformGroup: "css",
      buildPath: "build/web/",
      files: [{ destination: "variables.css", format: "css/variables" }]
    },
    ios: {
      transformGroup: "ios-swift",
      buildPath: "build/ios/",
      files: [{ destination: "StyleTokens.swift", format: "ios-swift/class.swift" }]
    },
    android: {
      transformGroup: "android",
      buildPath: "build/android/",
      files: [{ destination: "colors.xml", format: "android/resources" }]
    }
  }
};
