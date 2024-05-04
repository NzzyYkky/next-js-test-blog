import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
   return (
      <div className={styles.gridContainer}>
         {posts.map(({ title, id, eyecatch }) => (
            <article className={styles.post} key={id}>
               <Link href={`/blog/${id}`}>
                  <h2>{title}</h2>
                  <figure>
                     <Image
                        src={eyecatch.url}
                        alt=""
                        layout='fill'
                        sizes="(min-width: 1152px) 576px, 50vw"
                        placeholder="blur"
                        blurDataURL={eyecatch.blurDataURL}
                        objectFit='cover'
                     />
                  </figure>
               </Link>
            </article>
         ))}
      </div>
   )
}