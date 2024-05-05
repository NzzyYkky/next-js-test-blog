import { getAllCategories, getAllPostsByCategories } from 'lib/api';
import Meta from 'components/meta';
import Container from 'components/container';
import PostHeader from 'components/post-header';
import { eyecatchLocal } from 'lib/constant';
import { getPlaiceholder } from 'plaiceholder';
import Posts from 'components/posts';

export default function Category({ name, posts }) {
   return (
      <Container>
         <Meta
            pageTitle={name}
            pageDesc={`${name}に関する記事`}
         />
         <PostHeader title={name} subtitle="Blog Category" />
         <Posts posts={posts} />
      </Container>
   );
}

export async function getStaticPaths() {
   const allCats = await getAllCategories();

   return {
      paths: allCats.map(({ id }) => `/blog/category/${id}`),
      fallback: false
   }
}

export async function getStaticProps(context) {
   const catId = context.params.slug

   const allCats = await getAllCategories();
   const cat = allCats.find(({ id }) => id === catId);

   const posts = await getAllPostsByCategories(cat.id);

   for (const post of posts) {
      if (!post.hasOwnProperty('eyecatch')) {
         post.eyecatch = eyecatchLocal;
      }

      const { base64 } = await getPlaiceholder(post.eyecatch.url);
      post.eyecatch.blurDataURL = base64;
   }

   return {
      props: {
         name: cat.name,
         posts: posts
      }
   }
}