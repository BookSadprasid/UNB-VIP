import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const Contentful = {
  getHomePage: async () =>
    squashQueryResult(await client.getEntry("16j7tXsXmDn0WagfPAiGEw")),
  getAboutPage: async () =>
    squashQueryResult(await client.getEntry("57QPuj7m5XIF6wPQQLxMzn")),
  getWhyPage: async () =>
    squashQueryResult(await client.getEntry("16TV5iKKF5aKqdjqlI13v5")),
  getResearchPage: async () =>
    squashQueryResult(await client.getEntry("6NVyYRSvD4TYcYWeIq4EB0")),
  getPublicationPage: async () =>
    squashQueryResult(
      await client.getEntries({ content_type: "publications" })
    ),
  getEventPage: async () =>
    squashQueryResult(await client.getEntries({ content_type: "event" })),
  getOutreachPage: async () =>
    squashQueryResult(await client.getEntries({ content_type: "outreach" })),
  getNewsPage: async () =>
    squashQueryResult(await client.getEntries({ content_type: "news" })),
  getPhotoGalleryPage: async () =>
    squashQueryResult(
      await client.getEntries({ content_type: "photoGallery" })
    ),
  getPeopleLabs: async () =>
    squashQueryResult(await client.getEntries({ content_type: "peopleLabs" })),
  getResearchTheme: async () =>
    squashQueryResult(
      await client.getEntries({ content_type: "researchTheme" })
    ),
  getResearchResources: async () =>
    squashQueryResult(
      await client.getEntries({ content_type: "researchResource" })
    ),
  getResearchTools: async () =>
    squashQueryResult(
      await client.getEntries({ content_type: "researchTool" })
    ),
};

function squashQueryResult<T>(queryNode) {
  const { sys } = queryNode;

  switch (sys.type) {
    case "Array":
      return queryNode.items.map((item) => squashEntry(item));
    case "Entry":
      return squashEntry(queryNode);
    default:
      return queryNode;
  }
}

/** Recursively simplifies a Contentful entry and its children */
/**
 * Recursively simplifies a Contentful entry and its children
 * @param entryNode Contentful field node currently being squashed. This can be
 * an `object`, `boolean` or `string`
 * @param key Optional key name of the current field. This us used when sys.type
 * cannot be used to determine what type of information is help in the current
 * field.
 */
function squashEntry<T>(entryNode, key?: string) {
  const { fields, sys } = entryNode;

  // When entry node is an array
  if (Array.isArray(entryNode)) {
    return entryNode.map((node) => squashEntry(node));
  }

  switch (sys?.type) {
    case "Entry":
      // Add id and contentType for all entry nodes
      fields.id = sys.id;
      fields.contentType = sys.contentType.sys.id;
      return Object.keys(fields).reduce(
        (acc, key) => ({
          ...acc,
          [key]: squashEntry(fields[key], key),
        }),
        {}
      );
    case "Asset":
      return {
        alt: fields.title,
        src: fields.file.url,
      };
    case "Link":
      return sys;
    default:
      // Otherwise there is no sys.type then the entry is a string / object
      return entryNode;
  }
}
