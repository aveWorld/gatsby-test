
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
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /assets/, 
            exclude: /assets\/[a-zA-Z]{1,}\.png/
          }
        }
      }
    ],
  }
  