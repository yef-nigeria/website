import { createClient } from "contentful";

export async function getPublications() {
  const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: "master", // defaults to 'master' if not set
    accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
  });

  const res = await client.withoutUnresolvableLinks.getEntries({
    content_type: "publications",
  });

  return res.items;
}
