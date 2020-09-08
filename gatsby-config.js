
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
                // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
                // as we assume you'll use gatsby-remark-images to handle
                // images in markdown as it automatically creates responsive
                // versions of images.
                //
                // If you'd like to not use gatsby-remark-images and just copy your
                // original images to the public directory, set
                // `ignoreFileExtensions` to an empty array.
                ignoreFileExtensions: [],
              },
            },
          ],
        },
      }
    ],
  }
  