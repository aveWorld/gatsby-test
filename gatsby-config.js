
module.exports = {
    /* Your site config here */
    plugins: [
      `gatsby-plugin-sass`,
      {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          custom: {
            // families: ["Trebuchet MS, Roboto, Reso Regular"],
            urls: ["/fonts/fonts.css"],
          },
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /assets/
          }
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `articles`,
          path: `${__dirname}/src/Blog`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-copy-linked-files",
              options: {
                ignoreFileExtensions: [],
              },
            },
          ],
        },
      },
      `gatsby-plugin-react-helmet`
    ],
  }
  