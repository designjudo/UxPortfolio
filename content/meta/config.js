const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Tyler Mathes - Enterprise UX Designer", // <title>
  shortSiteTitle: "Tyler Mathes | UX/UI Designer", // <title> ending for posts and pages
  siteDescription: "UX Portfolio and collection of works for Tyler Mathes.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "tyler mathes",
  authorTwitterAccount: "designjudo",
  // info
  infoTitle: "Tyler Mathes",
  infoTitleNote: "UX/UI Designer",
  // manifest.json
  manifestName: "UX Portfolio - a blog and design portfolio for Tyler Mathes",
  manifestShortName: "UxPortfolio", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "design@tylermathes.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/designjudo" },
    { name: "twitter", url: "https://twitter.com/designjudo" },
    { name: "facebook", url: "http://facebook.com/tgmathes" }
  ]
};
