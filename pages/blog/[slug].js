import { getAllContentId, getPostByContentId } from 'lib/api';
import Container from 'components/container';
import PostHeader from 'components/post-header';
import Image from 'next/image';
import PostBody from 'components/post-body';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column';
import ConvertBody from 'components/convert-body';
import PostCategories from 'components/post-categories';
import extractText from 'lib/extract-text'
import Meta from 'components/meta'
import { eyecatchLocal } from 'lib/constant';
import { getPlaiceholder } from 'plaiceholder';
import prevNextPost from 'lib/prev-next-post';
import Pagination from 'components/pagination';

export default function Post({
   title,
   publish,
   content,
   category,
   eyecatch,
   description,
   prevPost,
   nextPost
}) {
   return (
      <Container>
         <Meta
            pageTitle={title}
            pageDesc={description}
            pageImage={eyecatch.url}
            pageImageH={eyecatch.height}
            pageImageW={eyecatch.width}
         />

         <article>
            <PostHeader title={title} subtitle="Blog Article" publish={publish} />
            {console.log(description)}

            <figure>
               <Image
                  key={eyecatch.url}
                  src={eyecatch.url}
                  alt=""
                  layout="responsive"
                  width={eyecatch.width}
                  height={eyecatch.height}
                  sizes="(min-width: 1152px) 1152px, 110vw"
                  priority
                  placeholder='blur'
                  blurDataURL={eyecatch.blurDataURL}
               />
            </figure>

            <TwoColumn>
               <TwoColumnMain>
                  <PostBody>
                     <ConvertBody contentHTML={content} />
                  </PostBody>
               </TwoColumnMain>
               <TwoColumnSidebar>
                  <PostCategories categories={category} />
               </TwoColumnSidebar>
            </TwoColumn>
            <Pagination
               prevText={prevPost.title}
               prevUrl={`/blog/${prevPost.id}`}
               nextText={nextPost.title}
               nextUrl={`/blog/${nextPost.id}`}
            />
         </article>
      </Container>
   )
}

export async function getStaticPaths() {
   const allSlugs = await getAllContentId();

   return {
      paths: allSlugs.map(({ id }) => {
         return `/blog/${id}`
      }),
      fallback: false
   }
}

export async function getStaticProps(context) {

   const contentId = context.params.slug
   const post = await getPostByContentId(contentId)

   if (!post) {
      return { notFound: true }
   } else {
      const description = extractText(post.content)
      const eyecatch = post.eyecatch ?? eyecatchLocal

      const { base64 } = await getPlaiceholder(eyecatch.url)
      eyecatch.blurDataURL = base64

      const allSlug = await getAllContentId();
      const [prevPost, nextPost] = prevNextPost(allSlug, contentId)

      return {
         props: {
            title: post.title,
            publish: post.publishedAt,
            content: post.content,
            eyecatch: eyecatch,
            category: post.category,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost
         }
      }
   }
}