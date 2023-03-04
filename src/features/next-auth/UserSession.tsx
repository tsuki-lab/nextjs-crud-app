'use client'
import { useSession } from 'next-auth/react'
import styles from './user-session.module.scss'

export const UserSession = () => {
  const { data: session } = useSession()
  return (
    <pre className={styles.pre}>
      <code>
        &quot;session&quot;:&nbsp;
        {JSON.stringify(session, null, 2)}
      </code>
    </pre>
  )
}
