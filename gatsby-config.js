
module.exports = {
    /* Your site config here */
    plugins: [
      `gatsby-plugin-sass`,
      {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          custom: {
            families: ["Trebuchet MS, Roboto, Reso Regular"],
            urls: ["/fonts/fonts.css"],
          },
        },
      }
    ],
  }
  