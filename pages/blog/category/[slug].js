import { getAllCategories } from 'lib/api';
import Meta from 'components/meta';
import Container from 'components/container';
import PostHeader from 'components/post-header';

export default function Category({ name }) {
   return (
      <Container>
         <PostHeader title={name} subtitle="Blog Category" />
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

   console.log('cat', catId);

   return {
      props: {
         name: cat.name
      }
   }
}