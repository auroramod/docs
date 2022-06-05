// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'H1-Mod Docs',
  tagline: 'modern warfare remastered',
  url: 'https://h1.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'h1-mod', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/h1-mod/website/tree/docs/edit',
	  routeBasePath: '/',
        },
	blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
	defaultMode: 'dark',
	disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'H1-Mod Docs',
          src: 'img/h1-header.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            label: 'Docs',
  	    position: 'left',
          },
          {
            href: 'https://h1.gg',
            label: 'Home',
            position: 'left',
          },
          {
            href: 'https://github.com/h1-mod',
            label: 'GitHub',
            position: 'left',
          },
	        {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} - H1-Mod.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
	additionalLanguages: ['lua'],
      },
    }),
};

module.exports = config;
