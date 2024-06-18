import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        cards: fields.array(
          fields.object(
            {
              title: fields.text({ label: "Card title" }),
              content: fields.text({ label: "Card content", multiline: true }),
            },
            { label: "Card" }
          ),
          { label: "Cards", itemLabel: (props) => props.fields.title.value }
        ),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "../../assets/images/posts/",
            },
          },
        }),
      },
    }),
  },
});
