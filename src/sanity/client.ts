import { createClient, type QueryParams } from 'next-sanity'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const isDevelopment = process.env.NODE_ENV === 'development'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: isDevelopment ? true : true,
})

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: !isDevelopment || tags.length ? false : revalidate,
      tags,
    },
  })
}
