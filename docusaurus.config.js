// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LMS Help Center",
  tagline:
    "Discover solutions and tips in the FAQ to enhance your journey with our LMS",
  favicon: "assets/favicon.ico",

  // Set the production url of your site here
  url: "https://help.epitome.global",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Epitome-Global", // Usually your GitHub org/user name.
  projectName: "help.epitome.global", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      id: {
        htmlLang: "id-ID",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: "QFBTPD6IS3",

        // Public API key: it is safe to commit it
        apiKey: "37bad73b42337ca496aba820cf391d18",

        indexName: "help-epitome",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "help\\.epitome\\.global|epitome\\.global",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },

      // Replace with your project's social card
      image: "assets/Epitome-Logogram.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Epitome Logo",
          src: "assets/Epitome-Logotype.png",
        },
        items: [
          { to: "/", label: "Home", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "enterprise",
            position: "left",
            label: "Enterprise",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          // {
          //   type: "html",
          //   position: "right",
          //   value:
          //     "<a class='button-login' href='https://epitome.global/login'>Login</>",
          // },
        ],
      },
      footer: {
        style: "dark",
        // logo: {
        //   alt: "EPITOME Logo",
        //   src: "assets/Epitome-Logogram.png",
        //   href: "https://opensource.fb.com",
        //   width: 160,
        //   height: 160,
        // },
        links: [
          {
            title: "About Epitome",
            items: [
              {
                label: "About Us",
                href: "https://www.epitome.global",
              },
            ],
          },
          {
            title: "Connect with us",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/epitomeglobal/",
              },
            ],
          },
        ],
        copyright: "Copyright © 2025 Epitome Global Pte Ltd.",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
