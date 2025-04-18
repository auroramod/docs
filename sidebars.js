﻿/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /*
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  */

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  mainSidebar: [
    'about',
    'changelog',
    {
      type: 'category',
      label: '🎮 Play H1-Mod',
      collapsible: false,
      items: [
        'install',
        'update',
        'uninstall',
      ]
    },
    {
      type: 'category',
      label: '🛠 Support',
      collapsible: false,
      items: [
        'troubleshoot',
        'errors',
        'functions',
        'ingamename',
        'unlockall',
        'languages',
        'colorcodes',
      ]
    },
    {
      type: 'category',
      label: '🔨 Dedicated Server',
      collapsible: true,
      items: [
        'install-server',
        'port-forwarding'
      ]
    },
    {
      type: 'category',
      label: '💻 Scripting',
      collapsible: true,
      items: [
        'gsc-scripting',
        'gsc-load-script',
        'gsc-scripting-syntax',
        'gsc-dump',
        'lua-scripting',
        'lua-load-script',
        'lua-scripting-syntax',
        'lua-gsc-reference',
        'ui-scripting'
      ]
    },
    {
      type: 'category',
      label: '👾 Zonetool',
      collapsible: true,
      items: [
        'zonetool-basics',
        'map-porting-iw5',
        'map-porting-s1'
      ]
    },
    {
      type: 'category',
      label: '💣 Additional Features',
      collapsible: false,
      items: [
        'ranked',
        'antialiasing',
        'aimassist',
        'fullbright',
      ]
    },
  ],
};

module.exports = sidebars;
