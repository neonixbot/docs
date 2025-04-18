// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NeonixHUB",
  tagline: "Un bot multifuncional basico",
  url: "https://docs.neonixhub.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "neoonixhub", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/neonixhub/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/neonixhub/docs/tree/master/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "NeonixHub",
        logo: {
          alt: "NeonixLogo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentación",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/noenixhub/neonixbot",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentacción",
            items: [
              {
                label: "Introducción",
                to: "/docs/intro",
              },
              {
                label: "Self-hosting",
                to: "/docs/self-host/installation",
              },
              {
                label: "Comandos",
                to: "/docs/commands/admin",
              },
            ],
          },
          {
            title: "Comunidad",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com",
              },
              {
                label: "Discord",
                href: "https://discord.com/app",
              },
              {
                label: "Twitter",
                href: "https://twitter.com",
              },
            ],
          },
          {
            title: "Más",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/neonixhub/",
              },
            ],
          },
          {
            title: "Patrocinios",
            items: [
              {
                label: "Quiero Patrocinar el Projecto.",
                href: "https://www.neonixhub.xyz/donar",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NeonixHub.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
