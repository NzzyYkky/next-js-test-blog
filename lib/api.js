import { createClient } from "microcms-js-sdk";

export const client = createClient({
   serviceDomain: process.env.SERVICE_DOMAIN,
   apiKey: process.env.API_KEY
})

export async function getPostByContentId(contentId) {
   try {
      const post = await client.get({
         endpoint: 'blogs',
         queries: {
            filters: `id[equals]${contentId}`
         }
      })

      return post.contents[0]
   } catch (err) {
      console.log('--getPostByContentId--');
      console.log(err);
   }
}

export async function getAllContentId(limit = 100) {
   try {
      const contents = await client.get({
         endpoint: 'blogs',
         queries: {
            fields: 'title,id',
            orders: '-publishDate',
            limit: limit
         }
      })

      return contents.contents
   } catch (err) {
      console.log('--getAllSlug--');
      console.log(err);
   }
}

export async function getAllPosts(limit = 100) {
   try {
      const contents = await client.get({
         endpoint: 'blogs',
         queries: {
            fields: 'title,id,eyecatch',
            orders: '-publishDate',
            limit: limit
         }
      })

      return contents.contents
   } catch (err) {
      console.log('--getAllPosts--');
      console.log(err);
   }
}