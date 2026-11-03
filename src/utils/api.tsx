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

export async function getHistoricalImages() {
  const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: "master", // defaults to 'master' if not set
    accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
  });

  const res = await client.withoutUnresolvableLinks.getEntries({
    content_type: "historicalImages",
  });

  return res.items;
}


const SAMPLEPUB = {
  metadata: { tags: [], concepts: [] },
  sys: {
    space: { sys: { type: "Link", linkType: "Space", id: "b4mzc1sr20v6" } },
    id: "3VHGl5829BvAt8aZnMpOOI",
    type: "Asset",
    createdAt: "2026-03-09T13:02:59.304Z",
    updatedAt: "2026-03-09T13:02:59.304Z",
    environment: {
      sys: { id: "master", type: "Link", linkType: "Environment" },
    },
    publishedVersion: 7,
    revision: 1,
    locale: "en-US",
  },
  fields: {
    title: "yef-annual-report-2019",
    description: "YEF Annual Report 2019",
    file: {
      url: "//assets.ctfassets.net/b4mzc1sr20v6/3VHGl5829BvAt8aZnMpOOI/d4b3279f61ae4ad4e87929ac5eb954e8/Annual_Report_2019.pdf",
      details: { size: 10414512 },
      fileName: "Annual Report 2019.pdf",
      contentType: "application/pdf",
    },
  },
};