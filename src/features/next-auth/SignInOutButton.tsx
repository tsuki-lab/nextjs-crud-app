'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './sign-in-out-button.module.scss'

export const SignInOutButton = () => {
  const { data: session } = useSession()
  return (
    <button
      className={styles.button}
      onClick={() => {
        if (!session) {
          signIn('google', { callbackUrl: '/' })
        } else {
          signOut()
        }
      }}
    >
      {session ? 'logout' : 'login'}
    </button>
  )
}
