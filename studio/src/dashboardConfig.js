export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60da7a78aaa21e105cc6afa5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uxa8zdzo",
                  apiId: "2ca08e1b-5f5b-4aaf-a70a-11860b5b8bb0",
                },
                {
                  buildHookId: "60da7a785bc01b0bafec62bc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ihgeueyb",
                  apiId: "22a97214-c30e-4ec9-ab99-2e1fc3ba3eb0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/raquelmv/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ihgeueyb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
