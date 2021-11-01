const siteUrl =
  process.env.URL || `https://agitated-brattain-089b45.netlify.app`

module.exports = {
  siteMetadata: {
    title: "Total Control Sdn Bhd",
    description:
      "TCSB specializes into industrial cables, oil & gas type cables, and telecommunication cables, together with accessories. TCSB offers services in ICT Network Infrastructures, ELV Engineering Services, Smart Surveillance, Enterprise Wifi, Smart Meeting Room, Digital Signage, Fiber Optic Solutions and lastly, IOT",
    siteUrl: "https://agitated-brattain-089b45.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-pnpm`,
      options: {
        projectPath: `${__dirname}`, // use parent directory as project root
        strict: true
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        cmsConfig: `/static/admin/config.yml`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UrbanGarden`,
        short_name: `UrbanGarden`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#047857`,
        display: `standalone`,
        icon: `src/img/urbangarden-icon.png`,
      },
    },
    "gatsby-transformer-remark-frontmatter",
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: () => siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
