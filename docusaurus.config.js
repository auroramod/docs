// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aurora Docs',
  tagline: 'modern warfare remastered',
  url: 'https://docs.auroramod.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'auroramod', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  //deploymentBranch: 'publish',
  trailingSlash: 'false',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/h1-mod/docs/blob/main',
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
          alt: 'Aurora Docs',
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
            href: 'https://auroramod.dev',
            label: 'Home',
            position: 'left',
          },
          {
            href: 'https://github.com/auroramod',
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
        copyright: `© ${new Date().getFullYear()} - Aurora.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
	    additionalLanguages: ['lua'],
      },
    }),
};

module.exports = config;
