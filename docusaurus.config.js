module.exports = {
  title: "Hackney API Specifications",
  tagline:
    "A guide on Hackney's development practices, and how to follow them",
  url: "https://lbhackney-it.github.io/api-specifications",
  baseUrl: "/api-specifications/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "api-specifications",
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "API Specifications",
      logo: {
        alt: "API Specifications",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/api-specifications",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: '4a83a5c4eb60fa0e4dae66ff84553e02',
      indexName: 'hackney',
      placeholder: 'Search Specifications'
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/api-specifications/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass"],
};
