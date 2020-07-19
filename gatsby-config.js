module.exports = {
  siteMetadata: {
    title: 'Chantal Ho',
    description: 'Personal Website',
    author: '@chuntul',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'work+sans\:300,400,500,600',
          'rubik\:300,400,500',
        ],
        display: 'swap',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
  ],
};
