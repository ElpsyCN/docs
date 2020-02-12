module.exports = {
  title: "Say",
  description: "oracle",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#6200ee" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "#6200ee" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/logo.png",
        color: "#6200ee"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/logo.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#6200ee" }]
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guide/" },
      {
        text: "句子",
        link: "/sentence/"
      },
      {
        text: "词语",
        link: "/word/"
      }
    ],
    repo: "ElpsyCN/say",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "来增加更多有趣的东西吧！",
    smoothScroll: true,
    displayAllHeaders: true,
    sidebar: {
      "/": ["guide", "sentence", "word"]
    }
  },
  plugins: [
    require("./export-json.js"),
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-121354150-12"
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
};
