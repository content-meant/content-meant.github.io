module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              width: 320,
              height: 320,
            },
          },
          `gatsby-remark-responsive-iframe`, // optional plugin but recommended
        ],
      },
    },
  ],
};
