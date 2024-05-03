import styles from 'styles/post-header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ConvertDate from 'components/convert-date'

export default function PostHeader({ title, subtitle, publish = '' }) {
   return (
      <div className={styles.stack}>
         <p className={styles.subtitle}>{subtitle}</p>
         <h1 className={styles.title}>{title}</h1>
         <ConvertDate dateISO={publish} />
      </div>
   )
}