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

export async function getAllPostsByCategories(catId, limit = 100) {
   try {
      const contents = await client.get({
         endpoint: 'blogs',
         queries: {
            filters: `category[contains]${catId}`,
            fields: 'title,id,eyecatch',
            orders: '-publishDate',
            limit: limit
         }
      })

      console.log('contents', catId);

      return contents.contents
   } catch (err) {
      console.log('--getAllPostsByCategories--');
      console.log(err);
   }
}

export async function getAllCategories(limit = 100) {
   try {
      const categories = await client.get({
         endpoint: 'categories',
         queries: {
            fields: 'name,id',
            orders: '-publishDate',
            limit: limit
         }
      })

      return categories.contents
   } catch (err) {
      console.log('--getAllCategories--');
      console.log(err);
   }
}