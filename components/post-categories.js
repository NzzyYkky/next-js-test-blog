import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
   return (
      <div className={styles.flexContainer}>
         <ul className={styles.list}>
            {
               categories.map(({ id, name }) => (
                  <li key={id}>
                     <Link href={`/blog/category/${id}`}>{name}</Link>
                  </li>
               ))
            }
         </ul>
      </div>
   )
}
