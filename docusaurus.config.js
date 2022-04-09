const logo = {
  alt: 'Orange Documentation',
  src: 'img/icon.ico',
  // srcDark: 'img/docusaurus_keytar.svg',
};

module.exports = {
  title: 'Orange',
  tagline: 'A cross-platform desktop application for searching local files',
  url: 'https://0-range.GitHub.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/icon.ico',
  organizationName: '0-range', // Usually your GitHub org/user name.
  projectName: '0-range.GitHub.io', // Usually your repo name.
  trailingSlash: true,
  customFields: {
    description:
      '🌍 World countries, states, regions, provinces, cities, towns in JSON, SQL, XML, PLIST, YAML, and CSV. All Countries, States, Cities with ISO2, ISO3, Country Code, Phone Code, Capital, Native Language, Timezones, Latitude, Longitude, Region, Subregion, Flag Emoji, and Currency. #countries #states #cities - dr5hn/countries-states-cities-database',
  },
  plugins: [
    'docusaurus-plugin-sass',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dr5hn/csc-website/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  themeConfig: {
    gtag: {
      trackingID: 'G-XPF0QLDXVS',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ['php'],
    },

    image: 'img/api.png',
    navbar: {
      hideOnScroll: false,
      title: 'Orange',
      logo: logo,
      items: [

        {
          href: 'https://github.com/naaive/orange',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2022 <a href="https://github.com/naaive/orange" target="_blank" rel="orange">Orange</a>`,
    },
  },

};
