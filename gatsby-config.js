module.exports = {
  siteMetadata: {
    title: `Rafał Ileczko`,
    siteUrl: `https://rafalileczko.com`,
  },
  pathPrefix: "/resume",
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
